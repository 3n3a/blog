---
title: "Google Authenticator - Convert Export to JSON (CyberChef Recipe)"
date: 2025-12-30 12:46
draft: false
authors: enk
tags: [google, authenticator, cyberchef, recipe, export, converter]
---

CyberChef Recipe to convert Google Authenticator Export, the QR-Code, to usable JSON.

<!--truncate-->

## How it works

**Parse the QR Code**

You input an image and the "Parse QR Code" operation will detect that QR Code in the image and output the contents.

Output: ```otpauth-migration://offline?data=eyASDFASDF...```


**Extract data part**

I used regex for this part to cut off the "otpauth-migration://offline?data=" part. We are left with the base64 encoded data.

Output: ```eyASDFASDF...```


**Decode Base64**

Fairly simple step :).

Output: ```[not renderable as this is binary data]```


**Decode Protobuf**

> What is Protobuf?
>
> _Protocol buffers are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data_

We are decoding the binary protobuf file with the supplied schema (.proto). This was extracted from "aegis" code repository (https://github.com/beemdevelopment/Aegis/pull/406/files#diff-410b85c0f939a198f70af5fc855a21ed).

Output: 
```json
{
    "otpParameters": [
        {
            "secret": "eyASDFASDF...",
            "name": "Test",
            "issuer": "",
            "algorithm": "SHA1",
            "digits": "SIX",
            "type": "TOTP",
            "counter": 0,
            "uniqueId": ""
        }
    ],
    "version": 2,
    "batchSize": 1,
    "batchIndex": 0,
    "batchId": 0
}
```

**Extract "otpParameters"**

In this step we extract the "otpParameters" field and for each object add a new field called "totpSecret" with the same value as "secret".

Output: 
```json
{
    "secret": "eyASDFASDF...",
    "name": "Test",
    "issuer": "",
    "algorithm": "SHA1",
    "digits": "SIX",
    "type": "TOTP",
    "counter": 0,
    "uniqueId": "",
    "totpSecret": "eyASDFASDF...",
}
```

**Convert values of "totpSecret" to Base32**

In these next steps we use the "Subsection" operation to match all the "totpSecret" key-values and convert the respective matches to base32.

Output:
```json
[
  {
    "secret": "eyASDFASDF...",
    "name": "Test",
    "issuer": "",
    "algorithm": "SHA1",
    "digits": "SIX",
    "type": "TOTP",
    "counter": 0,
    "uniqueId": "",
    "totpSecret": "ASDFASDFSDF"
  }
]
```

This is the final output which you can reuse to import into another app.

## CyberChef Instances

Choose any one of these or download CyberChef and open it locally.

* [Official - CyberChef (https://gchq.github.io/CyberChef)](https://gchq.github.io/CyberChef)
* [Hosted by me - 3n3a - CyberChef (https://cyberchef.enea.tech)](https://cyberchef.enea.tech)

## CyberChef Recipe

1. Click the "Load" icon in CyberChef
2. Paste the below code
3. Upload a screenshot of your export to CyberChef input (this will not be uploaded to any servers and thus be kept in your browser)

```json
[
  { "op": "Parse QR Code",
    "args": [false] },
  { "op": "Find / Replace",
    "args": [{ "option": "Simple string", "string": "otpauth-migration://offline?data=" }, "", true, false, true, false] },
  { "op": "From Base64",
    "args": ["A-Za-z0-9+/=", true, false] },
  { "op": "Protobuf Decode",
    "args": ["// LICENSE: GNU General Public License v3.0 to Beem Development (https://github.com/beemdevelopment)\n// From https://github.com/beemdevelopment/Aegis/pull/406/files#diff-410b85c0f939a198f70af5fc855a21ed\n// Changes: modified package name.\n\nsyntax = \"proto3\";\n\npackage googleauth;\n\nmessage MigrationPayload {\n  enum Algorithm {\n    ALGORITHM_UNSPECIFIED = 0;\n    SHA1 = 1;\n    SHA256 = 2;\n    SHA512 = 3;\n    MD5 = 4;\n  }\n\n  enum DigitCount {\n    DIGIT_COUNT_UNSPECIFIED = 0;\n    SIX = 1;\n    EIGHT = 2;\n    SEVEN = 3;\n  }\n\n  enum OtpType {\n    OTP_TYPE_UNSPECIFIED = 0;\n    HOTP = 1;\n    TOTP = 2;\n  }\n\n  message OtpParameters {\n    bytes secret = 1;\n    string name = 2;\n    string issuer = 3;\n    Algorithm algorithm = 4;\n    DigitCount digits = 5;\n    OtpType type = 6;\n    int64 counter = 7;\n    string unique_id = 8;\n  }\n\n  repeated OtpParameters otp_parameters = 1;\n  int32 version = 2;\n  int32 batch_size = 3;\n  int32 batch_index = 4;\n  int32 batch_id = 5;\n}", false, false] },
  { "op": "Jq",
    "args": [".otpParameters | map(. + {totpSecret: .secret})"] },
  { "op": "JSON Beautify",
    "args": ["  ", false, false] },
  { "op": "Subsection",
    "args": ["\"totpSecret\": \"([^\"]+)\"", true, true, false] },
  { "op": "From Base64",
    "args": ["A-Za-z0-9+/=", true, false] },
  { "op": "To Base32",
    "args": ["A-Z2-7="] }
]
```

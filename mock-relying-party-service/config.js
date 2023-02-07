module.exports = {
  ESIGNET_SERVICE_URL: process.env.ESIGNET_SERVICE_URL ?? "http://localhost:8088/v1/esignet",
  PORT: process.env.PORT ?? 8888,
  CLIENT_PRIVATE_KEY: process.env.CLIENT_PRIVATE_KEY ?? 'ewoJInAiOiAiMC00MElTeFhEbUM4U1ZydWRnMWU3dlFza3lXbG9oYWRtODNSQWtVeUg2UzRoMWFUUHJOd0xWbjlXQU5ueVJUcXVwRDFGcjhtWVo3ZjluWjJNa01qNDVVVjh1aUlqUVpyM2NyTXEwWUdrenRfTHZ3aExkdVdPSl96OV85elpOSGNrWGVpNEc4UVFGSlFZYjNUTmRHc1ZWU3dmZjY4U1NvZW44b3F2a2JrQUpzIiwKCSJrdHkiOiAiUlNBIiwKCSJxIjogIjZhczg4b2RjYlAyTURUOWxrYWhLMno0UUlIMjV6c2FfVWRMZ0F0THdEVnBla1hmSk5PUXZ1cU5ZMUd3M0p3czZ1UERMR2NFSzQyTXllT2RDRnFrbEZUdkRKbEpYTUZ2Z1dybUdiQ1VNdkpMLXJGeU8ta0NUR25GQlg2MG96ZEpiamZCdDNFM1FZeDNHOTA3Wml1dTlvMGF6ZXkxREp0cV96S3dlYXJFLXhUcyIsCgkiZCI6ICJCZ2RlaUNaYnI1cVo0aGFTaGc5dVFpblpSWVBTVVRZY181OFlndlEwV2tQS201ZklOT2dPSlB2aW1kS1lCdDhPdElXYmhvalR5bjBUS3JHUFBBcUZaQ25HWTE2SGtDVU4zMU1ibHVEMnd4WXo2U1BwWjF6c21QOFBiUVVWb3pqRUZlTHBpVE42bnVid19za1NfOUdHcmwxQ1BiMjV3VFBsWnRJM3VRNUlpUExfWUQ1al93NV9KN3RlakFhUmJobEpqNDhaRGE0Q1I4QmthVWkyUWFRbUxveWlPXzFPLVUtTmYxNy10MUM2ekZGS0tIUXgybE5sdEUxeEZRb0hCNFd1QkEyR25QNUxnTkZKU0x2MHA5NWdRSzM3blAwVFRjdWlaVmx2RmNtYkdJX2lsV2x4UktKVUQzbVpSNm56MjVYNFNhcFVXc3ducm5tN0p0VUFfVUdWR3ciLAoJImUiOiAiQVFBQiIsCgkidXNlIjogInNpZyIsCgkia2lkIjogIjFiYmRjOWRlLWMyNGYtNDgwMS1iNmIzLTY5MWFjMDc2NDFhZiIsCgkicWkiOiAicG1MX0c3VDRPRl9wcjJSQ3pra3VwaTFkQ2J3UlgzOWJNRUlzM3VpcnZrb1BSNUNFTnZ1dnNYUTBPaWFzM3RheHpMYTRuRzVKVlhIa3lPSVg4VXNLMU5GcnpaUFJLYmZOWDNoNUVBbmwzSTdjWk10b1lKTG5hd1VxYU5UdWtPbURDaFBsS3gxZlZqVXdzeU5uNUhTQW5tQmlhT21tX1JIbzM2dFBoZ2FQVXRFIiwKCSJkcCI6ICJlM2IyWDYwWk9vTVlyaE9QZ0s3aGM0eEV1NlRmRGNMbkp2R01waW54dllXVkN5Tmd2TktFczZjTmRNem5GYnBkMVRyRnplNm1TWkRwSVFoNmEyVzU3c2ZYOVotS2piNEQ4VDVJWmk5eGZTellOMk1qWVRmZ0dEVDNTSzlGWnFMc1FNTFYzTEpYWVdHUy1wNUFBY2FaQTAxSFZOLW1pV2xFVmdyTlFfVEF0NmsiLAoJImRxIjogIllnLUJxVW9UQ0k0eTZ4QlM0SmllcVhsWExUdDE4WWZJbkY4QnNVMnlmZmdSdmJ4bVRQTUI4TEpDUWdzVDdpZXhRaEdUT2tDZ0FDTU4tRjBjaUFQOTB2WmNoRVdEMzRCX0c3UEY3TFp6ck9PSFN2QWc5SGFMQlVySUk0MjRsUC1WZW5DT3VpaFJybmE5bS1XVU44LU1xdXV0d0tDVEVNZzJPMzl6MkZSX3dpYyIsCgkibiI6ICJ3WEdRQTU3NENVLVdUV1BJTGQ0UzNfMXNKZjBZb2Ywa3dNZU5jdFhjMXRoUW83MExqZm45ZjRpZ3BSZTdmOHFOc19XNmRMdUxXZW1GaEdKQlFCUTd2dmlja0VDS05KZm9fRXpTRF95eVBDZzdrX0FHYlRXVGt1b09iSHJwaWx3Skd5S1ZTa09JdWpIX0ZxSElWa3drVlhqV2MyNUxzYjhHcTRuQUhOUUVxcWdhWVBMRWk1ZXZDUjZTMEZ6Y1hUUHVSaDl6SC1jTTBPbmp2NG9ycmZZcEVyNjFIY1JwNU1YTDU1Yjd5Qm9JWWxYRDhOZmFsY2dkcld6cDRWWkh2UTh5VDlHNWVhZjI3WFVuNlpCZUJmN1ZuRUxjS0ZUeXcxcEsyd3FvT3hSQmM4WTF3TzZyRXk4UGxDVTZ3RC1tYkl6Y2pHMXdVZm5iZ3ZKT000QTVHNDFxdVEiCn0=',
  ESIGNET_AUD_URL: process.env.ESIGNET_AUD_URL ?? "http://localhost:8088/v1/esignet/oauth/token",
  CLIENT_ASSERTION_TYPE: process.env.CLIENT_ASSERTION_TYPE ?? "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  USERINFO_RESPONSE_TYPE: process.env.USERINFO_RESPONSE_TYPE ?? "jwk",
  JWE_USERINFO_PRIVATE_KEY: process.env.JWE_USERINFO_PRIVATE_KEY ?? 'ewogICJwIjogIjJlWDNaVmxMejR1UFJBTE5uQVI3dl91aGJsOWI3OXNfLWpteFcxaTdiMGZaTV9SZHNWT09yWW9uZ05WQWpuVHFSQm1SRXRndXVHM21LMjZnTDdZMVNpb1hXMF8teWxKRDk2QnlUdDRlTlJoY1pZTXFHZnZkaUEyYTlOQnZqZ1phVkNfWWxFYXFSaVNYaFI1SlJ1emgzX1ViUDFKX3BXaHl4R29fX0txWS1XOCIsCiAgImt0eSI6ICJSU0EiLAogICJxIjogInJwM19GS09rbDdfRzNPeUM1MVBNV2w2eG80SEVwaVdfWDN2X3ZoRWc4X2k4ZFpMMlhlVGdHc1BwZGxNUGJKRU5pN0NyUkFpTnlYV0RHMXlnRklvcFU1M1pfdmEyQUlsV1BacW5rcDA3WG9oTTVQc29HQUVDUXVsMWRHOXFYc0ZkNkgwczZVZGYweVlHa05xZzBwVjVJNk5hNzBIazRkandtMlNDUE90Q2pPYyIsCiAgImQiOiAiUWhuY1RYRmhIMksxMVYtMFJDMEJKTUFNYWc4TS1IQWhHdlg0bU5RWWlWQ3RFbkZXOUdNZ1huQlF1bzlfM0pCQ1huT01McFNScTRHeVV1Rmd5SEtnRS1JZHBrM0ZXMnFjY2syVFJHdHBUdXZ0OEwzVG9nSElCNDM5cTJjXzd6UzZSSVltaV9LUUYtcWw1OXRhVHl5UV83Nk9Hb2h2ZkZsZHVFVm5Zc0tBNnVJLUpHVG92VENybDEwY3p3YVBtdGdEOTFoWnV0emRVeUhJZktKb1VCcDNlUzk0U3VEaThDSklOeXpkb2NJYVFjaDVKd3Nidm5RZHJNTV85ZUZXeXVWVk9tc2JiNGQ4WVhmaS01NVhWbndiM3lCSGJNbU5Nd25IRTNlVm56bjkzOFpjeFBleEpld0NHQjVfRm8xYW5PTUlwTm8wV3kxMFMxQ1FkTllXWmZRSlhRIiwKICAiZSI6ICJBUUFCIiwKICAidXNlIjogImVuYyIsCiAgImtpZCI6ICJtajZ0YUhXY1hOOERqSmNoSl8wNk9hNDZERnd5UGpxZGNiSFIzWEdNRmxZIiwKICAicWkiOiAiR01PMWliUlh3ZVVHaEhJRUtXNlFId3pZMEpuaG5ZOURtRS02ekhNbTd4X241cElzSGdYaVVkQ0hCd3RSOU1IM2g5Q29aRlg3b0RfR1pRWXF6MmtvXzhNa0JHQmJ4cFZtcVZlVndLVGN4NG1UNE85MjRTcTlsUTM3WkdZT2dQVmZmbXhOQ1hyZmIydDBxZ1F3TEZPQzRhSjVoRm9EVzlzOHNUTkZpZ19Jei1BIiwKICAiZHAiOiAiWTZYaWZNdlllcUsxTXdJaEsyOTFkSGZMX0tESmQ2aUoycElWeE5PUWJEU3NaVEVrdzlxVmpsRjJfVmtJLTkwRjRYemJ0b1Y4NEVVS0ZPU3podjVKNG9fYlBKd1p4a2JXNUdEUXhiYVlrLWxfSDhGYk9LVFJTODRGQmw1b0ZjaGItTklrdHJLV1hodVAyNFhkTnYxUDBzN1IxaVNSVVlDeHM1ZHZpY291eVNzIiwKICAiYWxnIjogIlJTQS1PQUVQLTI1NiIsCiAgImRxIjogImRlX3dvUmdGeXhpVVVCTE9Oei01X2ktRy0xQmlhWFdGVkJDRUl2T2V0aW1CNEVkcWJ2QnZES1RWd2oxSFphUnk2YTVoZm9ub2VmRU1wQ1pqV0h3WWZZbFgtNFRXV0hacDhTSExuSkxsem10d3hCZC1kUGY1ZHdnSGRLVHJ5eVBfTVUtYVRkVVBPNldyT1pyd2xFcXdqd2wtR2FyXzFDcWFGOXBDdkxLSk9IRSIsCiAgIm4iOiAibEtESlRUNklGMjZITEEtQi1zSkdnaDl2bl9xVXcxaFR5RTZvUVdNZ19paE0wNVp3bUxQOVBRRWdMaGgwckw4VE1uNDhXN3luVmV0T1BGOUdsb1RiZFVndkZMYlRSejA1dlRhNU41eU9SV0VvTkx0Q0c5SFJwNXRfVXFGZnpRZG1SYkJDV1I5cTJhYWZPVTJRa0tvdXBBdlNGM2tjSHhsNjgzRDVPczA0NW01ZFRMTkFpZlJzbVh4TkptVjNXY244T0tjckdQTHFhTHcxbHJJSG9kNVo5TzFDaXAxalBVcXRwd0VaX3lCVkl2VmpFYWN4T0pWV0JrNUI1T1owOXVILW1EV3pnQXFYNkNmZGU5T0xyYlVIY1hIaUt6VHIwemRGN2g2MTgwU3hWOVdUeFluLUp6RHR5a0lhUklYZ3BsWXQ0cEFqUXZzVlA4d1ZmU2EyekFfSEtRIgp9'
};
\c mosip_mockidentitysystem

GRANT CONNECT
   ON DATABASE mosip_mockidentitysystem_insurance
   TO mockidsysteminsuranceuser;

GRANT USAGE
   ON SCHEMA mockidentitysystem
   TO mockidsysteminsuranceuser;

GRANT SELECT,INSERT,UPDATE,DELETE,TRUNCATE,REFERENCES
   ON ALL TABLES IN SCHEMA mockidentitysystem
   TO mockidsysteminsuranceuser;

ALTER DEFAULT PRIVILEGES IN SCHEMA mockidentitysystem
	GRANT SELECT,INSERT,UPDATE,DELETE,REFERENCES ON TABLES TO mockidsysteminsuranceuser;


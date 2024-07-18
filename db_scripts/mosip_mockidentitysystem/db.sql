CREATE DATABASE mosip_mockidentitysystem_insurance
	ENCODING = 'UTF8' 
	LC_COLLATE = 'en_US.UTF-8' 
	LC_CTYPE = 'en_US.UTF-8' 
	TABLESPACE = pg_default 
	OWNER = postgres
	TEMPLATE  = template0;

COMMENT ON DATABASE mosip_mockidentitysystem_insurance IS 'Mock identity related data is stored in this database';

\c mosip_mockidentitysystem_insurance postgres

DROP SCHEMA IF EXISTS mockidentitysystem CASCADE;
CREATE SCHEMA mockidentitysystem;
ALTER SCHEMA mockidentitysystem OWNER TO postgres;
ALTER DATABASE mosip_mockidentitysystem_insurance SET search_path TO mockidentitysystem,pg_catalog,public;


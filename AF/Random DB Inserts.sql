--  Random Queries
--  Returns only batches that have a co-trainer
select * from batch b where exists (select * from trainer t where t.id = b.cotrainer);

--  Returns only batches that have a co-trainer
select * from batch b where trainer in (select trainer from trainer t where t.id = b.cotrainer);

-- Returns only batches that have a co-trainer value of 1
select * from batch where cotrainer in (1);





--------------------------------------------------------
--  File created - Thursday-February-02-2017   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table BATCH
--------------------------------------------------------

  CREATE TABLE "ASSIGNFORCE_DEV"."BATCH" 
   (	"ID" NUMBER(10,0), 
	"NAME" VARCHAR2(255 CHAR), 
	"END_DATE" TIMESTAMP (6), 
	"START_DATE" TIMESTAMP (6), 
	"STATUS" NUMBER(10,0), 
	"COTRAINER" NUMBER(10,0), 
	"CURRICULUM" NUMBER(10,0), 
	"LOCATION" NUMBER(10,0), 
	"ROOM" NUMBER(10,0), 
	"TRAINER" NUMBER(10,0)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into ASSIGNFORCE_DEV.BATCH
SET DEFINE OFF;
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (208,'.NET (6/5)',to_timestamp('11-AUG-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('05-JUN-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,2,1,null,null);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (209,'Java (7/17)',to_timestamp('22-SEP-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('17-JUL-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,1,1,null,null);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (210,'SDET (8/14)',to_timestamp('20-OCT-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('14-AUG-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,3,1,null,null);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (211,'.NET (9/11)',to_timestamp('17-NOV-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('11-SEP-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,2,1,null,null);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (165,'ExampleClone',to_timestamp('24-FEB-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('19-DEC-16 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,1,1,7,1);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (166,'Example3',to_timestamp('27-JAN-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('21-NOV-16 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,2,3,null,9);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (183,'Java (2/13)',to_timestamp('21-APR-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('13-FEB-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,2,1,1,1,3);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (205,'SDET (1/2)',to_timestamp('10-MAR-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('02-JAN-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,3,1,null,5);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (206,'SDET (4/10)',to_timestamp('16-JUN-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('10-APR-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,3,1,null,8);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (164,'Example',to_timestamp('17-FEB-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('12-DEC-16 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,1,1,6,13);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (207,'Java (5/1)',to_timestamp('07-JUL-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('01-MAY-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,1,1,null,null);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (212,'Java (10/2)',to_timestamp('08-DEC-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('02-OCT-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,1,1,null,null);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (213,'Java (10/23)',to_timestamp('29-DEC-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('23-OCT-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,1,1,null,null);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (214,'SDET (11/27)',to_timestamp('02-FEB-18 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('27-NOV-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,3,1,null,null);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (215,'Java (12/4)',to_timestamp('09-FEB-18 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('04-DEC-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,1,1,null,null);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (216,'Java (3/13)',to_timestamp('19-MAY-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('13-MAR-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,1,1,null,null);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (20,'The Best Batch',to_timestamp('16-OCT-16 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('25-DEC-16 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,null,3,1,6,1);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (203,'Java (2/20)',to_timestamp('28-APR-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('20-FEB-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,5,1,1,4,3);
Insert into ASSIGNFORCE_DEV.BATCH (ID,NAME,END_DATE,START_DATE,STATUS,COTRAINER,CURRICULUM,LOCATION,ROOM,TRAINER) values (204,'Java (2/6)',to_timestamp('14-APR-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),to_timestamp('06-FEB-17 12.00.00.000000000 AM','DD-MON-RR HH.MI.SSXFF AM'),1,1,1,1,2,3);
--------------------------------------------------------
--  DDL for Index SYS_C005578
--------------------------------------------------------

  CREATE UNIQUE INDEX "ASSIGNFORCE_DEV"."SYS_C005578" ON "ASSIGNFORCE_DEV"."BATCH" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  Constraints for Table BATCH
--------------------------------------------------------

  ALTER TABLE "ASSIGNFORCE_DEV"."BATCH" MODIFY ("NAME" NOT NULL ENABLE);
  ALTER TABLE "ASSIGNFORCE_DEV"."BATCH" ADD PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
  ALTER TABLE "ASSIGNFORCE_DEV"."BATCH" MODIFY ("LOCATION" NOT NULL ENABLE);
  ALTER TABLE "ASSIGNFORCE_DEV"."BATCH" MODIFY ("ID" NOT NULL ENABLE);

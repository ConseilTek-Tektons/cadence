insert into organisation(id,name,slug) values('00000000-0000-4000-8000-000000000001','Northstar Operations','northstar');
insert into app_user(id,organisation_id,identity_subject,email,display_name) values('10000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000001','demo-pmo','pmo@example.test','Demo Portfolio Manager');
insert into board(id,organisation_id,name,slug,portfolio) values('20000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000001','Finance transformation','finance-transformation','Enterprise transformation');
insert into work_item(id,organisation_id,board_id,title,description,status,owner_id,estimate,due_on) values
('30000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000001','20000000-0000-4000-8000-000000000001','Complete ERP data mapping','Map source fields and approve reconciliation rules.','in_progress','10000000-0000-4000-8000-000000000001',8,current_date+10),
('30000000-0000-4000-8000-000000000002','00000000-0000-4000-8000-000000000001','20000000-0000-4000-8000-000000000001','Launch finance operating model','Cut over the approved operating model.','blocked','10000000-0000-4000-8000-000000000001',13,current_date+21);
insert into item_dependency(predecessor_id,successor_id) values('30000000-0000-4000-8000-000000000001','30000000-0000-4000-8000-000000000002');

# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: faise|
|nickname|string|null: false|

### Association
- has_many :chats
-has＿many :groups, through: :users_groups
-has_many :users_groups

## chats テーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false|

### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null :false, foreign_key: true|
|chats_id|integer|null :false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_table
|Column|Type|Options|
|------|----|-------|
|name|string|null :false|
### Association
- has_many :chats
-has_many :users, through: users_groups
has_many :users_groups
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

### Association
- belongs_to :user
- has_many :groups

## users_groupsテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null :false, foreign_key: true|
|chats_id|integer|null :false, foreign_key: true|

### Association
- belong_to :user
- belong_to :groups

## groups_table
|Column|Type|Options|
|------|----|-------|
|group|integer|null :false foreign_key: true|
### Association
- belongs_to :chat
-has_many :user, through: users_groups
has_many :users_groups
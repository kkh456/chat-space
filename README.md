# chat-space DB設計
## userテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: faise|
|nickname|string|null: false|

### Association
- has_many :chats
-has/many :comments

## chats テーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text|||
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :comments

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|chats_id|integer|null false, foreign_key: true|
### Association
- belongs_to :chat
-belongs_to :user
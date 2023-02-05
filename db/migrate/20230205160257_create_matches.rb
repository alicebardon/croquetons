class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|

      t.references :user1, null: false, foreign_key: { to_table: :users }
      t.references :user2, null: false, foreign_key: { to_table: :users }
      t.boolean :user1_accepted, default: true
      t.boolean :user2_accepted, default: false
      t.string :status, default: "pending"
      t.timestamps
    end
  end
end

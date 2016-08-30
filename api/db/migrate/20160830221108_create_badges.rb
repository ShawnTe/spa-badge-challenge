class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :description
      t.integer :boot_id
      t.integer :total_votes

      t.timestamps null: false
    end
  end
end

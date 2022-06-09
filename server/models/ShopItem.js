const { Schema, model } = require("mongoose");

const shopItemSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const ShopItem = model("shopItem", shopItemSchema);

module.exports = ShopItem;
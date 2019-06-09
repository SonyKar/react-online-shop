<?php
    require_once 'product.php';

    class cartItem extends product{
        private $size;
        private $qty;

        public function setSize($size) {
            $this->size = $size;
        }

        public function setQty($qty) {
            $this->qty = $qty;
        }

        public function transformToArray() {
            return [
                "name" => $this->getName(),
                "price" => $this->getPrice(),
                "image" => $this->getImage(),
                "size" => $this->size,
                "qty" => $this->qty
            ];
        }
    }
?>
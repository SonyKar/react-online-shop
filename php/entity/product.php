<?php
    class product {
        private $name;
        private $price;
        private $image;
        private $desc;

        public function setName($name) {
            $this->name = $name;
        }

        public function getName() {
            return $this->name;
        }

        public function setPrice($price) {
            $this->price = $price;
        }

        public function getPrice() {
            return $this->price;
        }

        public function setImage($image) {
            $this->image = $image;
        }

        public function getImage() {
            return $this->image;
        }

        public function setDescription($desc) {
            $this->desc = $desc;
        }

        public function getDescription() {
            return $this->desc;
        }

        public function transformToArray() {
            return [
                "name" => $this->name,
                "price" => $this->price,
                "image" => $this->image,
                "description" => $this->desc
            ];
        }
    }
?>
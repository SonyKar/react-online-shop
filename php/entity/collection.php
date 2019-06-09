<?php
    class collection {
        private $name;
        private $image;

        public function setName($name) {
            $this->name = $name;
        }

        public function getName() {
            return $this->name;
        }

        public function setImage($image) {
            $this->image = $image;
        }

        public function getImage() {
            return $this->image;
        }
        
        public function transformToArray() {
            return [
                "name" => $this->name,
                "image" => $this->image
            ];
        }
    }
?>
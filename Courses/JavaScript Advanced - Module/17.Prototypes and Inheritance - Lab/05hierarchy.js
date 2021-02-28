function Hierarchy() {
    class Figure {
        constructor() {
            this.m = 'cm';
            this.cm = 'cm';
            this.mm = 'cm';
        }

        get Area() {
            if (this.m == 'cm' || this.cm == 'cm' || this.mm == 'cm') {
                
            }
        }

        set changeUnits(value) {
            this.m = value;
            this.mm = value;
            this.cm = value;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    }
}

Hierarchy()
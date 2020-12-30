class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;

        World.add(world, this.sling);
    }

    display() {

        if (this.sling.bodyA != null) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#311608");

            if (pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);

            }
            else {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);

            }

        }

    }

    fly() {
        this.sling.bodyA = null;
    }

}

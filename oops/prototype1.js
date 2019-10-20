function BiCycle(cadence, speed, gear, tirePressure){
    this.speed = speed;
    this.cadence = cadence;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function(){
        this.tirePressure += 3;
    }
}

var biCycle1 = new BiCycle(1,1,1,1);
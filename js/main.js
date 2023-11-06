const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};

const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};
console.log(computer.turnOn.apply(server));
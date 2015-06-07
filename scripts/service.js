var app = angular.module('todoApp');

app.service('mainService', function() {
    this.title = 'Work Todo List';
    this.list = [];

    this.addItem = function() {
        if (newItem) {
            this.list.push(newItem);
            newItem = '';
        }
    }

    this.removeItem = function() {
        var index = this.list.indexOf(thingToRemove);
        if (index !== -1){
            this.list.splice(index, 1);
            thingToRemove = ' ';
    }
}
}); //End Service Function

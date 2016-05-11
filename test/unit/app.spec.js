describe('app', function () {
    'use strict';

    var app = window.app;




    xdescribe('assignToSwimmingCourse', function () {


        xit('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({name: 'John", age: 20, course: adults'
            });
        });


        xit('should calculate age person', function () {
            expect(app.calculateAge("10/10/2014")).toEqual(1);
        });


        xit('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course:'teens'
            });
        });


        xit('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });

            xit('should assign person below 12 to kids group', function () {
                expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                    name: 'Zack', age: 6, course: 'kids'

                });
            });


                xit('should assign person below 12 to kids group', function () {
                    expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                        name: 'Zack', age: 6, course: 'kids'
                    });
                });


                    xit('should assign person below 12 to kids group', function () {
                        expect(app.assignToSwimmingCourse('Zack', '10/07/1994')).toEqual({
                            name: 'Zack', age: 22, course: 'adults'
                        });
                    });


                    xit('should assign person below 12 to kids group', function () {
                        expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                            name: 'Zack', age: 6, course: 'kids'
                        });

                    });


                        xit('should assign person below 12 to kids group', function () {
                            expect(app.assignToSwimmingCourse('Zack', '4/04/1994')).toEqual({
                                name: 'Zack', age: 22, course: 'adults'
                            });
                        });
                    });


                    describe('calculateArea', function () {
                        xit('should return area of figure & message', function () {
                            expect(answer.calculateArea(6, 1, 3, 'Ok', 'Fail')).toEqual({area: 3, message: 'Ok'});
                            expect(answer.calculateArea(2, 6, 6, 'Ok', 'Fail')).toEqual({area: -6, message: 'Fail'});

                            it('should return area of figure & message', function () {
                                expect(answer.calculateArea("", 1, '', 'Ok', 'Fail')).toEqual(false);
                            });
                            xit('should return area 0 & message "Big null"', function () {
                                expect(answer.calculateArea(0, 0, 0, 'Ok', 'Fail')).toEqual({area: 0, message: 'Big null'
                                });
                            });

                        });
                    });

                });






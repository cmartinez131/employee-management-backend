const { Employee, Task } = require('../models');

//dummy data for initial database
const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Melissa",
		lastname: "Lynch",
		department: "Computer Science"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Kim",
		lastname: "Kardashian",
		department: "Computer Science"
	});

	const dummyEmployee3 = await Employee.create({
		firstname: "Pavel",
		lastname: "Shostak",
		department: "Computer Science"
	});

	const dummyTask = await Task.create({
		title: "Create Frontend",
        location: "C107",
        timeslot: "W 5:35 - 8:15 PM"
	});

	const dummyTask2 = await Task.create({
		title: "Create Backend",
        location: "C107",
        timeslot: "W 5:35 - 8:15 PM"
	});

	const dummyTask3 = await Task.create({
		title: "Connect frontend to backend",
        location: "C107",
        timeslot: "W 5:35 - 8:15 PM"
	});


	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;
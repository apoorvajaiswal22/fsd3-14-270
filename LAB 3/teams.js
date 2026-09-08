let teams = [
    {
        id: 1,
        tname: "Rusty",
        t1: "Ashish Raj Singh",
        email: "ashish.raj@gmail.com",
        member: 6
    },
    {
        id: 2,
        tname: "HackHers",
        t1: "Apoorva Jaiswal",
        email: "apoorvjaiswal05@gmail.com",
        member: 6
    }
];

let nextId = 3;

export const getAllTeams = () => teams;

export const getTeamById = (id) => 
    teams.find(team => team.id === id);

export const addTeam = (newTeam) => {
    const team ={ id: nextId++, ...newTeam  };
    teams.push(team);
    return team;
};

export const updateTeambyID = (id, updatedTeam) => {
    const team = getTeamById(id);
    if (team) return null;
    Object.assign(team, updatedTeam);
    return team;
};

export const deleteTeamById = (id) => {
    const index = teams.findIndex(team => team.id === id);
    if (index === -1)
         return false;
    teams.splice(index, 1);
    return true;
}
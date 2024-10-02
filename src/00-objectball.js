const game = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
            }
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    }
} 

const homePlayers = game.home.players;

const awayPlayers = game.away.players;

function numPointsScored(playerName) {
    if (homePlayers[playerName]) {
        return homePlayers[playerName].points;
    } else if (awayPlayers[playerName]) {
        return awayPlayers[playerName].points;
    }
};

function shoeSize(playerName) {
    if (homePlayers[playerName]) {
        return homePlayers[playerName].shoe;
    } else if (awayPlayers[playerName]) {
        return awayPlayers[playerName].shoe;
    }
};

teamColors

function teamColors(teamName) {
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    }
}

function teamNames(game) {
    const homeTeamName = game.home.teamName;
    const awayTeamName = game.away.teamName;
    return [homeTeamName, awayTeamName];
}

function playerNumbers(teamName) {
    if (game.home.teamName === teamName) {
        return Object.values(game.home.players).map(player => player.number);
    } else if (game.away.teamName === teamName) {
        return Object.values(game.away.players).map(player => player.number);
    }      
}

function bigShoeRebounds() {
    let maxShoeSize = -Infinity;
    let rebounds = 0;

    // Iterate over home team players
    for (let player in game.home.players) {
        const playerData = game.home.players[player];
        if (playerData.shoe > maxShoeSize) {
            maxShoeSize = playerData.shoe;
            rebounds = playerData.rebounds;
        }
    }

    // Iterate over away team players
    for (let player in game.away.players) {
        const playerData = game.away.players[player];
        if (playerData.shoe > maxShoeSize) {
            maxShoeSize = playerData.shoe;
            rebounds = playerData.rebounds;
        }
    }

    return rebounds;
}

function mostPointsScored() {
    let pointsScored = -Infinity;

    // Iterate over home team players
    for (let player in game.home.players) {
        const playerData = game.home.players[player];
        if (playerData.points > pointsScored) {
            pointsScored = playerData.points
        }
    }

    // Iterate over away team players
    for (let player in game.away.players) {
        const playerData = game.away.players[player];
        if (playerData.points > pointsScored) {
            pointsScored = playerData.points
        }
    }

    return pointsScored;
}

function totalPoints(teamPlayers) {
    let total = 0;
    for (let player in teamPlayers) {
        total += teamPlayers[player].points;
    }
    return total;
}

function winningTeam(game) {
    const homePoints = totalPoints(game.home.players);
    const awayPoints = totalPoints(game.away.players);

    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else if (awayPoints > homePoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}

function playerWithLongestName(game) {
    let longestName = '';

    // Iterate over home team players
    for (let player in game.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    // Iterate over away team players
    for (let player in game.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    return longestName;
}
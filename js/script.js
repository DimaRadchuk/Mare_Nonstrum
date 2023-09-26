// math function

function getCountGamePlayer(name, obj) {
  let gameCount = 0;
  obj.forEach((games) => {
    games.players.forEach((player) => {
      if (player.player == name) {
        gameCount++;
      }
    });
  });
  return gameCount;
}

function getCountWinGamePlayer(name, obj) {
  let gameWinCount = 0;
  obj.forEach((games) => {
    games.players.forEach((player) => {
      if (player.player == name && player.points == 1) {
        gameWinCount++;
      }
    });
  });
  return gameWinCount;
}

function getWinRatingPlayers(player, obj) {
  let gameRating = 0;
  let gameWinCount = getCountWinGamePlayer(player, obj);
  let gameCount = getCountGamePlayer(player, obj);
  if (gameWinCount != 0) {
    gameRating = ((gameWinCount / gameCount) * 100).toFixed(2);
  }
  gameRating += "%";
  return gameRating;
}

// players table

function createTableRatingPlayers(players, obj) {
  // Create table data rows
  players.forEach(function (player) {
    const dataRow = document.createElement("tr");

    let dataCell = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    dataCell[0].textContent = player;
    dataCell[1].textContent = getCountGamePlayer(player, obj);
    dataCell[2].textContent = getCountWinGamePlayer(player, obj);
    dataCell[3].textContent = getWinRatingPlayers(player, obj);

    dataCell.forEach(function (cell) {
      dataRow.appendChild(cell);
    });
    DOM.playerRating.appendChild(dataRow);
  });
}

const tbodyPlayersRating = createTableRatingPlayers(players, gameDate);

// math function

function getCountGameFaction(name, obj) {
  let gameCount = 0;
  obj.forEach((games) => {
    games.players.forEach((faction) => {
      if (faction.faction == name) {
        gameCount++;
      }
    });
  });
  return gameCount;
}

function getCountWinGameFaction(name, obj) {
  let gameWinCount = 0;
  obj.forEach((games) => {
    games.players.forEach((faction) => {
      if (faction.faction == name && faction.points == 1) {
        gameWinCount++;
      }
    });
  });
  return gameWinCount;
}

function getWinRatingFaction(faction, obj) {
  let gameRating = 0;
  let gameWinCount = getCountWinGameFaction(faction, obj);
  let gameCount = getCountGameFaction(faction, obj);
  if (gameWinCount != 0) {
    gameRating = ((gameWinCount / gameCount) * 100).toFixed(2);
  }
  gameRating += "%";
  return gameRating;
}

// faction table

function createTableRatingFactionRow(obj) {
  const factionsRow = document.getElementsByClassName(
    "faction_rating_table_tr"
  );
  const factions = document.getElementsByClassName("faction_rating_table_name");
  // Create table data rows
  factionsRow.forEach(function (faction) {
    let dataCellFaction = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    faction = getElementsByClassName("faction_rating_table_name").textContent;
    DOM.factionRatingRow.appendChild(faction);
    dataCellFaction[0].textContent = getCountGameFaction(faction, obj);
    dataCellFaction[1].textContent = getCountWinGameFaction(faction, obj);
    dataCellFaction[2].textContent = getWinRatingFaction(faction, obj);

    dataCellFaction.forEach(function (cell) {
      dataRowFaction.appendChild(cell);
    });
    DOM.factionRatingRow.appendChild(dataRowFaction);
  });
}

const tbodyFactionRatingRow = createTableRatingFactionRow(gameDate);

function createTableRatingFaction(factions, obj) {
  // Create table data rows
  factions.forEach(function (faction) {
    const dataRowFaction = document.createElement("tr");

    let dataCellFaction = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    dataCellFaction[0].textContent = faction;
    dataCellFaction[1].textContent = getCountGameFaction(faction, obj);
    dataCellFaction[2].textContent = getCountWinGameFaction(faction, obj);
    dataCellFaction[3].textContent = getWinRatingFaction(faction, obj);

    dataCellFaction.forEach(function (cell) {
      dataRowFaction.appendChild(cell);
    });
    DOM.factionRating.appendChild(dataRowFaction);
  });
}

const tbodyFactionRating = createTableRatingFaction(factions, gameDate);

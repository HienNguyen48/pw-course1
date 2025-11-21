interface Player {
  name: string;
  position: string;
  jerseyNumber: number;
}

class Team {
  name: string;
  players: Player[];

  constructor(name: string) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }

  listPlayers(): void {
    console.log(`Team: ${this.name}`);
    console.log(`Players (${this.players.length}):`);
    if (this.players.length === 0) {
      console.log("  No players in the team.");
    } else {
      this.players.forEach((player, index) => {
        console.log(`  ${index + 1}. ${player.name} - ${player.position} (Jersey: ${player.jerseyNumber})`);
      });
    }
  }
}

const team = new Team("Thunder FC");
team.addPlayer({ name: "Nguyen Van A", position: "Forward", jerseyNumber: 10 });
team.addPlayer({ name: "Tran Van B", position: "Midfielder", jerseyNumber: 8 });
team.listPlayers();

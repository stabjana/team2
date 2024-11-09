const express = require('express');
const router = express.Router();
const db = require('../db');

//route to start a game
router.get('/start', async (req, res) => {
    //an example of game logic, REFINE LATER
    const playerId = req.query.playerId || 'guest';
    const playerName = req.query.playerName || 'Guest Player';

    // initialize game state
    const gameState = {
        player: {
            id: req.query.playerId || 'guest',
            name: req.query.playerName || 'Guest Player',
            score: 0,
            level: 1
        },
        gameStatus: 'in-progress',
        startTime: new Date(),
        historyStage: 'ancient', // name of the current AGE in our game
        itemsCollected: JSON.stringify([]),//list of collectd items
        currentTask: JSON.stringify({
            type: 'riddle',
            description: 'Solve the first riddle to begin your journey!'
        }), //if we are going to add 'current task' bar
    }
    res.json({ message: 'Game started' });
});

try {
    // get a database connection and insert the game state. REFINE DATA LATER
    const connection = await db.getConnection();
    const result = await connection.query(
        `INSERT INTO games (player_id, player_name, score, level, game_status, start_time, history_stage, items_collected, current_task) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            gameState.player_id,
            gameState.player_name,
            gameState.score,
            gameState.level,
            gameState.game_status,
            gameState.start_time,
            gameState.history_stage,
            gameState.items_collected,
            gameState.current_task
        ]
    );

    // Release the connection
    conn.release();

    // Respond with the initial game state and database ID
    res.json({
        message: 'Game started',
        gameId: result.insertId,
        gameState: gameState,
    });
} catch (error) {
    console.error('Error starting game:', error);
    res.status(500).json({ error: 'Failed to start game' });
}

module.exports = router;
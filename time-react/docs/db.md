## For backend I use these DB (REFINE LATER):

CREATE DATABASE browser_game;

### games

```shell
    CREATE DATABASE timelink_game;
    USE timelink_game;
    CREATE USER 'game_user'@'localhost' IDENTIFIED BY 'userpassword';
    GRANT ALL PRIVILEGES ON timelink_game.* TO 'game_user'@'localhost';
    FLUSH PRIVILEGES;

    CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id VARCHAR(255),
    player_name VARCHAR(255),
    score INT DEFAULT 0,
    level INT DEFAULT 1,
    game_status VARCHAR(50),
    start_time DATETIME,
    history_stage VARCHAR(50),
    items_collected TEXT,
    current_task TEXT
    );

    INSERT INTO games (player_id, player_name, score, level, game_status, start_time, history_stage, items_collected, current_task)
    VALUES (1, 'Player 1', 0, 1, 'in-progress', NOW(), 'First age', '[]', '{"type": "riddle", "description": "Solve the first riddle to begin your journey!"}');

```

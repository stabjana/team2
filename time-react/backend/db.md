## For backend I use these db tables (REFINE LATER):

### games

```shell
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
```

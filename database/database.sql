-- ------------------------------------------------------------
-- Tabela: users
-- ------------------------------------------------------------
CREATE TABLE users (
    id          BIGSERIAL       PRIMARY KEY,
    name        VARCHAR(150)    NOT NULL,
    email       VARCHAR(255)    NOT NULL UNIQUE,
    password    VARCHAR(255)    NOT NULL,
    created_at  TIMESTAMP       NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------
-- Tabela: habits (Afazeres Âmbito Pessoal)
-- ------------------------------------------------------------
CREATE TABLE habits (
    id          BIGSERIAL       PRIMARY KEY,
    user_id     BIGINT          NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name        VARCHAR(200)    NOT NULL,
    created_at  TIMESTAMP       NOT NULL DEFAULT NOW(),
    active      BOOLEAN         NOT NULL DEFAULT TRUE
);

CREATE INDEX idx_habits_user_id ON habits(user_id);

-- ------------------------------------------------------------
-- Tabela: habit_logs
-- ------------------------------------------------------------
CREATE TABLE habit_logs (
    id          BIGSERIAL       PRIMARY KEY,
    habit_id    BIGINT          NOT NULL REFERENCES habits(id) ON DELETE CASCADE,
    date        DATE            NOT NULL DEFAULT CURRENT_DATE,
    completed   BOOLEAN         NOT NULL DEFAULT FALSE,

    -- Garante apenas um registro por hábito por dia
    CONSTRAINT uq_habit_log_per_day UNIQUE (habit_id, date)
);

CREATE INDEX idx_habit_logs_habit_id ON habit_logs(habit_id);
CREATE INDEX idx_habit_logs_date     ON habit_logs(date);

-- ------------------------------------------------------------
-- Dados de exemplo (seed)
-- ------------------------------------------------------------
INSERT INTO users (name, email, password) VALUES
    ('João Silva', 'joao@email.com', 'hashed_password_aqui');

INSERT INTO habits (user_id, name) VALUES
    (1, 'Caminhar 20 min'),
    (1, 'Beber 2L de água'),
    (1, 'Dormir 7h+'),
    (1, 'Leitura 15 min');

INSERT INTO habit_logs (habit_id, date, completed) VALUES
    (1, CURRENT_DATE - 4, TRUE),
    (1, CURRENT_DATE - 3, TRUE),
    (1, CURRENT_DATE - 2, TRUE),
    (1, CURRENT_DATE - 1, TRUE),
    (1, CURRENT_DATE,     FALSE),
    (2, CURRENT_DATE - 1, TRUE),
    (2, CURRENT_DATE,     FALSE);
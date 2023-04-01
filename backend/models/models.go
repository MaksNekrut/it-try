package models

import (
	"database/sql"
)

type Models struct {
	DB DBModel
}

func NewModels(db *sql.DB) Models {
	return Models{
		DB: DBModel{DB: db},
	}
}

type Course struct {
	ID           int    `json:"id"`
	Direction    string `json:"direction"`
	SubDirection string `json:"subdirection"`
	School       string `json:"school"`
	Title        string `json:"title"`
	Description  string `json:"description"`
	Skills       string `json:"skills"`
	Price        int    `json:"price"`
	Duration     string `json:"duration"`
	Online       bool   `json:"online"`
	City         string `json:"city"`
	Levels       string `json:"levels"`
	Certificate  bool   `json:"certificate"`
	Isfree       bool   `json:"isfree"`
	Languages    string `json:"languages"`
	Url          string `json:"url"`
}

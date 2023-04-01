package models

import (
	"context"
	"database/sql"
	"time"
)

type DBModel struct {
	DB *sql.DB
}

func (m *DBModel) Get(id int) (*Course, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	query := `select id, direction, subdirection, school, title, description, skills, price, duration, online, city, levels,
       certificate, isfree, languages, url from courses where id = $1`

	row := m.DB.QueryRowContext(ctx, query, id)

	var course Course

	err := row.Scan(
		&course.ID,
		&course.Direction,
		&course.SubDirection,
		&course.School,
		&course.Title,
		&course.Description,
		&course.Skills,
		&course.Price,
		&course.Duration,
		&course.Online,
		&course.City,
		&course.Levels,
		&course.Certificate,
		&course.Isfree,
		&course.Languages,
		&course.Url,
	)

	if err != nil {
		return nil, err
	}
	return &course, nil
}

func (c *DBModel) All() ([]*Course, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	query := `select id, direction, subdirection, school, title, description, skills, price, duration, online, city, levels,
       certificate, isfree, languages, url from courses order by id`

	rows, err := c.DB.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var courses []*Course

	for rows.Next() {
		var course Course
		err := rows.Scan(
			&course.ID,
			&course.Direction,
			&course.SubDirection,
			&course.School,
			&course.Title,
			&course.Description,
			&course.Skills,
			&course.Price,
			&course.Duration,
			&course.Online,
			&course.City,
			&course.Levels,
			&course.Certificate,
			&course.Isfree,
			&course.Languages,
			&course.Url,
		)
		if err != nil {
			return nil, err
		}
		courses = append(courses, &course)
	}
	return courses, nil
}

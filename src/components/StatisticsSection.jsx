import React from 'react';
import './StatisticsSection.css';

function StatisticsSection() {
  const stats = [
    { label: 'Projects Completed', value: 28, color: '#543347' }, // Red
    { label: 'Hours Spent Coding', value: 2042, color: '#6C719A' }, // Dark Blue
    { label: 'All Nighters Pulled', value: 1, color: '#C4899F' }, // Dark Blue
    { label: 'Taylor Swift Minutes', value: 24728, color: '#3B3F5F' }, // Blackish Gray
  ];

  return (
    <section className="statistics-section">
      <div className="statistics-container">
        {stats.map((stat, index) => (
          <div
            className="stat-card"
            key={index}
            style={{ backgroundColor: stat.color }}
          >
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default StatisticsSection;

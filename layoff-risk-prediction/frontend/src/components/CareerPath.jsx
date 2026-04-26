import React from 'react';
import { Briefcase, Clock, DollarSign, ArrowRight } from 'lucide-react';

const CareerPath = ({ careerData }) => {
  if (!careerData) return null;

  return (
    <div className="glass-panel animate-in" style={{ animationDelay: '0.3s' }}>
      <div className="flex-between" style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
        <h3 style={{ margin: 0 }}>Career Transition Plan</h3>
        <div className="tag" style={{ background: 'rgba(59, 130, 246, 0.2)', borderColor: 'var(--primary-accent)' }}>
          Recommended
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '1rem', alignItems: 'center' }}>
        <div className="timeline-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <Briefcase size={28} color="var(--primary-accent)" style={{ marginTop: '2px' }} />
          <div>
            <div className="stat-label">Target Role</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{careerData.target_role}</div>
          </div>
        </div>

        <div className="timeline-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <Clock size={28} color="var(--primary-accent)" style={{ marginTop: '2px' }} />
          <div>
            <div className="stat-label">Est. Reskilling Time</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{careerData.time_months} Months</div>
          </div>
        </div>

        <div className="timeline-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <DollarSign size={28} color="var(--risk-low)" style={{ marginTop: '2px' }} />
          <div>
            <div className="stat-label">Expected Salary</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--risk-low)' }}>{careerData.salary}</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn-primary" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', marginTop: '0', width: 'auto', padding: '0.75rem 1.5rem' }}>
              Start Upskilling <ArrowRight size={18} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPath;

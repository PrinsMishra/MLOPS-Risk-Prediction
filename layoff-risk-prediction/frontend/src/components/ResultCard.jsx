import React from 'react';
import { AlertCircle, ShieldAlert, CheckCircle2 } from 'lucide-react';

const ResultCard = ({ result }) => {
  if (!result) return null;

  const isHigh = result.risk_label === "HIGH";
  const isMed = result.risk_label === "MEDIUM";
  
  const colorClass = isHigh ? "text-high" : isMed ? "text-medium" : "text-low";
  
  const Icon = isHigh ? ShieldAlert : isMed ? AlertCircle : CheckCircle2;

  return (
    <div className="glass-panel animate-in" style={{ animationDelay: '0.2s', borderTop: `4px solid var(--risk-${result.risk_label.toLowerCase()})` }}>
      <div className="flex-between">
        <h3>Risk Assessment</h3>
        <span className={`tag ${colorClass}`}>
          <Icon size={14} style={{ marginRight: '4px' }} />
          {result.risk_label} RISK
        </span>
      </div>
      
      <div className="stat-box">
        <div className="stat-label">Model Probability</div>
        <div className={`stat-value ${colorClass}`}>
          {result.risk_score}%
        </div>
      </div>

      <div className="timeline" style={{ marginTop: '1.5rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-muted)' }}>Top Risk Factors</h4>
        {result.top_risk_factors.map((factor, idx) => (
          <div className="flex-row" key={idx} style={{ fontSize: '0.9rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--primary-accent)', marginRight: '8px' }}>•</span>
            <span style={{ lineHeight: 1.4 }}>{factor}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;

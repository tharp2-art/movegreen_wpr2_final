import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PricingPage.css';

const PricingPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentMethod: 'credit-card'
  });

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '0',
      period: 'Monat',
      color: 'green',
      features: [
        'Basis-Routenplanung',
        'CO₂-Einsparungsanzeige',
        'Interaktive Karte',
        'Grundlegende Statistiken'
      ],
      cta: 'Jetzt kostenlos starten',
      icon: 'fa-seedling'
    },
    {
      id: 'community',
      name: 'Community',
      price: '5',
      period: 'Monat',
      color: 'green',
      features: [
        'Alles aus Free',
        'Gruppen-Routenplanung',
        'Gemeinschaftliche CO₂-Einsparung',
        'Favoritenverwaltung',
        'Community-Forum Zugang'
      ],
      cta: 'Community beitreten',
      icon: 'fa-users'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '15',
      period: 'Monat',
      color: 'orange',
      features: [
        'Alles aus Community',
        'Unbegrenzte Routenberechnungen',
        'Echtzeit-Verkehrsinfos',
        'Erweiterte Analyseoptionen',
        'Prioritäts-Support'
      ],
      cta: 'Upgrade auf Premium',
      icon: 'fa-crown',
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      price: '50',
      period: 'Monat',
      color: 'purple',
      features: [
        'Alles aus Premium',
        'Team-Management',
        'Erweiterte Analytics',
        'Verwaltungs-Tools',
        'API-Zugang',
        'Dedizierter Account Manager'
      ],
      cta: 'Kontaktieren Sie uns',
      icon: 'fa-building'
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Hier würde die tatsächliche Verarbeitung stattfinden
    setShowModal(false);
    // Weiterleitung zur Bestätigungsseite
    navigate('/confirmation', { 
      state: { 
        plan: selectedPlan,
        email: formData.email 
      }
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Wählen Sie das richtige Preismodell für Ihre Bedürfnisse</h1>
        <p>MoveGreen bietet flexible Pläne für jede Art von Nutzer – von Einzelpersonen bis hin zu Unternehmen.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            data-color={plan.color}
          >
            {plan.popular && <div className="popular-badge">Beliebt</div>}
            <div className="plan-icon">
              <i className={`fas ${plan.icon}`}></i>
            </div>
            <h2>{plan.name}</h2>
            <div className="price">
              <span className="currency">CHF</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/{plan.period}</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              className={`cta-button ${plan.color}`}
              onClick={() => handlePlanSelect(plan)}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={() => setShowModal(false)}>
              <i className="fas fa-times"></i>
            </button>
            <h2>Registrierung für {selectedPlan.name}</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail-Adresse</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod">Zahlungsmethode</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                >
                  <option value="credit-card">Kreditkarte</option>
                  <option value="paypal">PayPal</option>
                  <option value="twint">TWINT</option>
                </select>
              </div>
              <button type="submit" className={`submit-button ${selectedPlan.color}`}>
                Jetzt kaufen
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPage;
import React, { useState } from 'react';

const WithdrawalFunds = () => {
  const [selectedMethod, setSelectedMethod] = useState('atm');
  const [amount, setAmount] = useState(1000);
  
  const currentBalance = 85000;

  const withdrawalMethods = [
    { id: 'atm', icon: '🏧', title: 'ATM Card', desc: 'Withdraw from any ATM' },
    { id: 'cheque', icon: '📃', title: 'Cheque', desc: 'Issue cheque withdrawal' },
    { id: 'counter', icon: '🏢', title: 'Bank Counter', desc: 'Visit bank branch' },
    { id: 'online', icon: '💻', title: 'Online Transfer', desc: 'Transfer to other account' },
  ];

  const quickAmounts = [500, 1000, 2000, 5000, 10000];

  const recentWithdrawals = [
    { date: '03 Dec 2025', amount: '-₹10,000', desc: 'ATM Withdrawal' },
    { date: '02 Dec 2025', amount: '-₹5,000', desc: 'Shopping Payment' },
    { date: '01 Dec 2025', amount: '-₹15,000', desc: 'Bill Payment' },
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgb(240, 249, 255) 0%, rgb(230, 247, 255) 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: 'rgb(30, 95, 116)',
      padding: '0'
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    pageHeader: {
      marginBottom: '40px'
    },
    sectionTitle: {
      color: 'rgb(30, 95, 116)',
      borderBottom: '3px solid rgb(56, 163, 165)',
      paddingBottom: '10px',
      marginBottom: '15px',
      fontWeight: '700',
      fontSize: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    pageDescription: {
      color: 'rgb(108, 117, 125)',
      fontSize: '18px'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px'
    },
    card: {
      background: 'rgb(255, 255, 255)',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 8px 20px rgba(30, 95, 116, 0.1)',
      marginBottom: '30px'
    },
    withdrawalMethodGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '20px',
      marginTop: '20px'
    },
    withdrawalOption: {
      border: '2px solid rgb(233, 236, 239)',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      background: 'rgb(255, 255, 255)'
    },
    withdrawalOptionActive: {
      borderColor: 'rgb(56, 163, 165)',
      backgroundColor: 'rgb(248, 253, 255)'
    },
    withdrawalIcon: {
      fontSize: '40px',
      marginBottom: '15px',
      color: 'rgb(30, 95, 116)'
    },
    withdrawalTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '5px'
    },
    withdrawalDesc: {
      fontSize: '14px',
      color: 'rgb(108, 117, 125)'
    },
    amountSection: {
      marginBottom: '30px'
    },
    amountInput: {
      width: '100%',
      fontSize: '32px',
      fontWeight: '700',
      color: 'rgb(30, 95, 116)',
      border: '2px solid rgb(222, 226, 230)',
      borderRadius: '10px',
      padding: '15px',
      textAlign: 'center',
      marginBottom: '20px',
      outline: 'none'
    },
    quickAmounts: {
      display: 'flex',
      justifyContent: 'center',
      gap: '19px',
      flexWrap: 'wrap',
      marginTop: '0px'
    },
    amountButton: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: 'rgb(233, 236, 239)',
      border: 'none',
      fontWeight: '600',
      color: 'rgb(30, 95, 116)',
      fontSize: '14px'
    },
    infoBox: {
      background: 'linear-gradient(135deg, rgb(248, 253, 255) 0%, rgb(230, 247, 255) 100%)',
      borderLeft: '4px solid rgb(56, 163, 165)',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '20px'
    },
    atmSection: {
      marginBottom: '30px'
    },
    atmCard: {
      background: 'linear-gradient(135deg, rgb(30, 95, 116) 0%, rgb(56, 163, 165) 100%)',
      padding: '25px',
      borderRadius: '15px',
      color: 'rgb(255, 255, 255)',
      marginBottom: '20px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    },
    withdrawalButton: {
      background: 'linear-gradient(135deg, rgb(167, 40, 40) 0%, rgb(201, 32, 32) 100%)',
      color: 'rgb(255, 255, 255)',
      border: 'none',
      padding: '15px 40px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      margin: '30px auto',
      width: 'fit-content'
    },
    sidebarCard: {
      background: 'rgb(255, 255, 255)',
      borderRadius: '15px',
      padding: '25px',
      boxShadow: '0 8px 20px rgba(30, 95, 116, 0.1)',
      marginBottom: '30px'
    },
    balanceDisplay: {
      textAlign: 'center',
      padding: '20px 0'
    },
    balanceAmount: {
      fontSize: '40px',
      fontWeight: '800',
      color: 'rgb(167, 40, 40)',
      margin: '10px 0'
    },
    stepList: {
      listStyle: 'none',
      padding: '0'
    },
    stepItem: {
      padding: '15px',
      marginBottom: '10px',
      background: 'rgb(255, 255, 255)',
      borderLeft: '4px solid rgb(56, 163, 165)',
      borderRadius: '5px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center'
    },
    stepNumber: {
      background: 'rgb(30, 95, 116)',
      color: 'rgb(255, 255, 255)',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '10px',
      fontWeight: '600'
    },
    recentWithdrawals: {
      marginTop: '20px'
    },
    withdrawalItem: {
      padding: '12px 0',
      borderBottom: '1px solid rgb(233, 236, 239)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <main style={styles.mainContent}>
        <div style={styles.pageHeader}>
          <h1 style={styles.sectionTitle}>
            <span>💳</span>
            Withdraw Funds
          </h1>
          <p style={styles.pageDescription}>
            Withdraw money from your account using various methods
          </p>
        </div>

        <div style={styles.contentGrid}>
          <div>
            <div style={styles.card}>
              <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>Select Withdrawal Method</h3>
              <div style={styles.withdrawalMethodGrid}>
                {withdrawalMethods.map((method) => (
                  <div
                    key={method.id}
                    style={{
                      ...styles.withdrawalOption,
                      ...(selectedMethod === method.id ? styles.withdrawalOptionActive : {})
                    }}
                  >
                    <div style={styles.withdrawalIcon}>{method.icon}</div>
                    <div style={styles.withdrawalTitle}>{method.title}</div>
                    <div style={styles.withdrawalDesc}>{method.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.card}>
              <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>Enter Withdrawal Amount</h3>
              <div style={styles.amountSection}>
                <div style={styles.amountInput}>
                  ₹{amount.toLocaleString('en-IN')}
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: 'rgb(108, 117, 125)', marginBottom: '10px', fontSize: '16px' }}>Quick Select Amount</p>
                  <div style={styles.quickAmounts}>
                    {quickAmounts.map((quickAmount) => (
                      <div
                        key={quickAmount}
                        style={styles.amountButton}
                      >
                        {quickAmount >= 1000 ? `₹${quickAmount/1000}K` : `₹${quickAmount}`}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={styles.infoBox}>
                <h4 style={{ marginTop: 0, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px' }}>
                  <span>ℹ️</span>
                  <span>Important</span>
                </h4>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>• Minimum withdrawal: ₹100</p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>• Daily limit: ₹50,000</p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>• ATM limit: ₹25,000 per transaction</p>
              </div>
            </div>

            {selectedMethod === 'atm' && (
              <div style={{ ...styles.card, ...styles.atmSection }}>
                <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>ATM Card Details</h3>
                <div style={styles.atmCard}>
                  <p style={{ margin: '0 0 15px 0', fontSize: '20px', fontWeight: '600' }}>TELANGANA BANK</p>
                  <p style={{ margin: '0 0 10px 0', fontSize: '24px', letterSpacing: '3px' }}>XXXX XXXX XXXX 1234</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <div>
                      <p style={{ margin: '0', fontSize: '14px', opacity: '0.8' }}>VALID THRU</p>
                      <p style={{ margin: '0', fontSize: '18px' }}>12/28</p>
                    </div>
                    <div>
                      <p style={{ margin: '0', fontSize: '14px', opacity: '0.8' }}>CVV</p>
                      <p style={{ margin: '0', fontSize: '18px' }}>XXX</p>
                    </div>
                  </div>
                </div>
                <p style={{ color: 'rgb(108, 117, 125)', fontSize: '14px', marginTop: '10px' }}>
                  Visit any ATM with this card to withdraw funds
                </p>
              </div>
            )}

            <div style={{ textAlign: 'center' }}>
              <div style={styles.withdrawalButton}>
                <span>🔒</span>
                <span>Proceed to Withdraw</span>
              </div>
              <p style={{ color: 'rgb(108, 117, 125)', fontSize: '14px', marginTop: '10px' }}>
                Your transaction is secured with 256-bit encryption
              </p>
            </div>
          </div>

          <div>
            <div style={styles.sidebarCard}>
              <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>Withdrawal Instructions</h3>
              <ol style={styles.stepList}>
                <li style={styles.stepItem}>
                  <span style={styles.stepNumber}>1</span>
                  <span style={{ fontSize: '16px' }}>Select withdrawal method</span>
                </li>
                <li style={styles.stepItem}>
                  <span style={styles.stepNumber}>2</span>
                  <span style={{ fontSize: '16px' }}>Enter withdrawal amount</span>
                </li>
                <li style={styles.stepItem}>
                  <span style={styles.stepNumber}>3</span>
                  <span style={{ fontSize: '16px' }}>Confirm transaction details</span>
                </li>
                <li style={styles.stepItem}>
                  <span style={styles.stepNumber}>4</span>
                  <span style={{ fontSize: '16px' }}>Complete withdrawal process</span>
                </li>
              </ol>
            </div>

            <div style={styles.sidebarCard}>
              <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>Current Balance</h3>
              <div style={styles.balanceDisplay}>
                <p style={{ color: 'rgb(108, 117, 125)', margin: 0, fontSize: '16px' }}>Available Balance</p>
                <div style={styles.balanceAmount}>₹{currentBalance.toLocaleString('en-IN')}</div>
              </div>
            </div>

            <div style={styles.sidebarCard}>
              <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>Recent Withdrawals</h3>
              <div style={styles.recentWithdrawals}>
                {recentWithdrawals.map((withdrawal, index) => (
                  <div key={index} style={styles.withdrawalItem}>
                    <div>
                      <div style={{ fontSize: '16px' }}>{withdrawal.date}</div>
                      <div style={{ fontSize: '14px', color: 'rgb(108, 117, 125)' }}>{withdrawal.desc}</div>
                    </div>
                    <div style={{ color: 'rgb(167, 40, 40)', fontWeight: '600', fontSize: '16px' }}>{withdrawal.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WithdrawalFunds;
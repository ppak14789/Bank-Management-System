import React, { useState } from 'react';

const DepositFunds = () => {
  const [selectedMethod, setSelectedMethod] = useState('netbanking');
  const [amount, setAmount] = useState(1000);
  
  const currentBalance = 0;

  // Deposit methods data like types
  const depositMethods = [
    { id: 'netbanking', icon: '💻', title: 'Net Banking', desc: 'Transfer from other bank' },
    { id: 'upi', icon: '📱', title: 'UPI Payment', desc: 'Scan & Pay via UPI' },
    { id: 'debit', icon: '💳', title: 'Debit Card', desc: 'Add via Debit Card' },
    { id: 'branch', icon: '🏢', title: 'Branch Deposit', desc: 'Visit nearest branch' },
  ];

  // Quick amount buttons
  const quickAmounts = [500, 1000, 5000, 10000, 25000];

  // Recent deposits data sample
  const recentDeposits = [
    { date: '04 Dec 2025', amount: '+₹1,00,000', desc: 'Salary Credit' },
  ];

  // Styles
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
    depositMethodGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '20px',
      marginTop: '20px'
    },
    depositOption: {
      border: '2px solid rgb(233, 236, 239)',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      background: 'rgb(255, 255, 255)'
    },
    depositOptionActive: {
      borderColor: 'rgb(56, 163, 165)',
      backgroundColor: 'rgb(248, 253, 255)'
    },
    depositIcon: {
      fontSize: '40px',
      marginBottom: '15px',
      color: 'rgb(30, 95, 116)'
    },
    depositTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '5px'
    },
    depositDesc: {
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
    upiSection: {
      marginBottom: '30px'
    },
    qrCode: {
      background: 'rgb(255, 255, 255)',
      padding: '20px',
      borderRadius: '10px',
      display: 'inline-block',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px'
    },
    depositButton: {
      background: 'linear-gradient(135deg, rgb(40, 167, 69) 0%, rgb(32, 201, 151) 100%)',
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
      color: 'rgb(40, 167, 69)',
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
    recentDeposits: {
      marginTop: '20px'
    },
    depositItem: {
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
        {/* Page anojali Header */}
        <div style={styles.pageHeader}>
          <h1 style={styles.sectionTitle}>
            <span>💰</span>
            Deposit Funds
          </h1>
          <p style={styles.pageDescription}>
            Add money to your account using various deposit methods
          </p>
        </div>

        <div style={styles.contentGrid}>
          {/* Form */}
          <div>
            {/* Deposit types different Methods */}
            <div style={styles.card}>
              <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>Select Deposit Method</h3>
              <div style={styles.depositMethodGrid}>
                {depositMethods.map((method) => (
                  <div
                    key={method.id}
                    style={{
                      ...styles.depositOption,
                      ...(selectedMethod === method.id ? styles.depositOptionActive : {})
                    }}
                  >
                    <div style={styles.depositIcon}>{method.icon}</div>
                    <div style={styles.depositTitle}>{method.title}</div>
                    <div style={styles.depositDesc}>{method.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div style={styles.card}>
              <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>Enter Deposit Amount</h3>
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
                <p style={{ margin: '5px 0', fontSize: '14px' }}>• Minimum deposit: ₹500</p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>• Maximum per transaction: ₹1,00,000</p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>• Processing time: Instant to 2 hours</p>
              </div>
            </div>

            {/* UPI Section */}
            {selectedMethod === 'upi' && (
              <div style={{ ...styles.card, ...styles.upiSection }}>
                <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>UPI Payment Details</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={styles.qrCode}>
                      <div style={{ 
                        width: '200px', 
                        height: '200px', 
                        background: 'rgb(248, 249, 250)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        borderRadius: '5px'
                      }}>
                        <span style={{ fontSize: '64px', color: 'rgb(108, 117, 125)' }}>📱</span>
                      </div>
                    </div>
                    <p style={{ color: 'rgb(108, 117, 125)', fontSize: '14px' }}>Scan this QR code with any UPI app</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '16px' }}><strong>UPI ID:</strong> telanganabank@upi</p>
                    <p style={{ fontSize: '16px' }}><strong>Account Name:</strong> Rajesh Kumar</p>
                    <p style={{ fontSize: '16px' }}><strong>Amount:</strong> ₹{amount.toLocaleString('en-IN')}</p>
                    <div style={{
                        background: 'transparent',
                        border: '1px solid rgb(56, 163, 165)',
                        color: 'rgb(56, 163, 165)',
                        padding: '8px 16px',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '10px',
                        width: 'fit-content'
                      }}
                    >
                      <span>📋</span>
                      <span>Copy UPI ID</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Deposit way Button */}
<div style={{ textAlign: 'center' }}>
              <div style={styles.depositButton}>
                <span>🔒</span>
                <span>Proceed to Deposit</span>
              </div>
              <p style={{ color: 'rgb(108, 117, 125)', fontSize: '14px', marginTop: '10px' }}>
                Your transaction is secured with 256-bit encryption
              </p>
            </div>
          </div>

          {/* Right sidebar */}
          <div>
            {/* Deposit Instructions */}
                <div style={styles.sidebarCard}>
      <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>Deposit Instructions</h3>
     <ol style={styles.stepList}>
                    <li style={styles.stepItem}>
         <span style={styles.stepNumber}>1</span>
                <span style={{ fontSize: '16px' }}>Select your preferred deposit method</span>
         </li>
                <li style={styles.stepItem}>
                  <span style={styles.stepNumber}>2</span>
                  <span style={{ fontSize: '16px' }}>Enter the deposit amount</span>
                </li>
                <li style={styles.stepItem}>
                  <span style={styles.stepNumber}>3</span>
                  <span style={{ fontSize: '16px' }}>Complete the payment process</span>
                </li>
                <li style={styles.stepItem}>
                  <span style={styles.stepNumber}>4</span>
                  <span style={{ fontSize: '16px' }}>Receive confirmation instantly</span>
                </li>
              </ol>
            </div>

 {/* Current Balance */}
    <div style={styles.sidebarCard}>
         <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>Current Balance</h3>
               <div style={styles.balanceDisplay}>
       <p style={{ color: 'rgb(108, 117, 125)', margin: 0, fontSize: '16px' }}>Available Balance</p>
           <div style={styles.balanceAmount}>₹{currentBalance.toLocaleString('en-IN')}</div>
              </div>
            </div>

            {/* Recent Deposits */}
            <div style={styles.sidebarCard}>
              <h3 style={{ marginBottom: '20px', color: 'rgb(30, 95, 116)', fontSize: '24px' }}>Recent Deposits</h3>
              <div style={styles.recentDeposits}>
                {recentDeposits.map((deposit, index) => (
                  <div key={index} style={styles.depositItem}>
                    <div>
                      <div style={{ fontSize: '16px' }}>{deposit.date}</div>
                      <div style={{ fontSize: '14px', color: 'rgb(108, 117, 125)' }}>{deposit.desc}</div>
                    </div>
                    <div style={{ color: 'rgb(40, 167, 69)', fontWeight: '600', fontSize: '16px' }}>{deposit.amount}</div>
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

export default DepositFunds;
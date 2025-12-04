import React, { useState } from "react";

const BankHeader = () => {
  const [activePage, setActivePage] = useState("home");

  // Navigation items data
  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "account", label: "Account Details", icon: "👤" },
    { id: "deposit", label: "Deposit", icon: "💰" },
    { id: "withdraw", label: "Withdrawal", icon: "💳" },
    { id: "support", label: "Support", icon: "❓" },
  ];

  // Handle navigation item click
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
  };

  // Styles
  const styles = {
    container: {
      fontFamily:
        "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      background: 'linear-gradient(135deg, #1e5f74 0%, #2a7e8f 50%, #38a3a5 100%)',
      color: "#ffffff",
      width: "100%",
      height: "90px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      width: "100%",
      height: "100%",
    },
    leftSection: {
      display: "flex",
      alignItems: "center",
      flex: 1,
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      marginRight: "50px",
    },
    logoBox: {
      width: "40px",
      height: "40px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: "3px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      fontWeight: "bold",
      marginRight: "12px",
    },
    bankName: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#ffffff",
      margin: "0",
    },
    navContainer: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
    },
    navItem: {
      padding: "20px 26px",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: "500",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      whiteSpace: "nowrap",
    },
    navItemActive: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    navItemHover: {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
    navIcon: {
      fontSize: "16px",
    },
    accountInfo: {
      color: "#000000", // Black text color
      fontWeight: "700",
      fontSize: "16px",
      whiteSpace: "nowrap",
      marginLeft: "auto", // Push to extreme right
      paddingLeft: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {/* Left Section: Logo and Navigation */}
        <div style={styles.leftSection}>
          {/* Logo and Bank Name */}
          <div style={styles.logoContainer}>
            <div style={styles.logoBox}>TB</div>
            <h1 style={styles.bankName}>Telangana Bank</h1>
          </div>
          
          {/* Navigation Items */}
          <div style={styles.navContainer}>
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <div
                  key={item.id}
                  style={{
                    ...styles.navItem,
                    ...(isActive ? styles.navItemActive : {}),
                  }}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor =
                        styles.navItemHover.backgroundColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor =
                        styles.navItem.backgroundColor;
                    }
                  }}
                >
                  {/* Navigation Icon */}
                  <span style={styles.navIcon}>{item.icon}</span>

                  {/* Navigation Label */}
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Account Name Display - Extreme Right */}
        <div style={styles.accountInfo}>
          Account: 501 - Jelly
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1400px) {
          .nav-container {
            gap: 25px !important;
          }
          
          .nav-item {
            padding: 15px 20px !important;
          }
        }
        
        @media (max-width: 1200px) {
          .nav-container {
            gap: 20px !important;
          }
          
          .nav-item {
            padding: 12px 16px !important;
          }
          
          .account-info {
            font-size: 15px !important;
          }
        }
        
        @media (max-width: 992px) {
          .nav-container {
            gap: 15px !important;
          }
          
          .nav-item {
            padding: 10px 14px !important;
            font-size: 13px !important;
          }
          
          .bank-name {
            font-size: 21px !important;
          }
          
          .account-info {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 768px) {
          .header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
            padding: 15px !important;
            height: auto !important;
          }
          
          .left-section {
            width: 100% !important;
            justify-content: space-between !important;
            margin-bottom: 10px !important;
          }
          
          .nav-container {
            flex-wrap: wrap !important;
            gap: 12px !important;
            width: 100% !important;
            justify-content: center !important;
          }
          
          .nav-item {
            flex: 1;
            min-width: 140px;
            justify-content: center;
          }
          
          .bank-name {
            font-size: 19px !important;
          }
          
          .account-info {
            width: 100% !important;
            text-align: right !important;
            margin-left: 0 !important;
            padding-left: 0 !important;
            margin-top: 10px !important;
            font-size: 15px !important;
          }
          
          .logo-container {
            margin-right: 20px !important;
          }
        }
        
        @media (max-width: 576px) {
          .header {
            padding: 10px !important;
          }
          
          .nav-container {
            justify-content: center !important;
          }
          
          .nav-item {
            min-width: 120px;
            padding: 8px 12px !important;
            font-size: 12px !important;
          }
          
          .account-info {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 480px) {
          .nav-item {
            min-width: 100px;
            padding: 6px 10px !important;
            font-size: 11px !important;
          }
          
          .nav-icon {
            font-size: 14px !important;
          }
          
          .bank-name {
            font-size: 18px !important;
          }
          
          .logo-box {
            width: 35px !important;
            height: 35px !important;
            font-size: 16px !important;
          }
          
          .account-info {
            font-size: 13px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BankHeader;
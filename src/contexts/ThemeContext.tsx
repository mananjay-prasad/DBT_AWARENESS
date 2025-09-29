import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDark: false;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isDark = false;

  return (
    <ThemeContext.Provider value={{ isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
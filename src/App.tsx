import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, DollarSign, Eye, Activity, ArrowUpRight, ArrowDownRight, Menu, Bell, Settings, Moon, Sun, Filter, Download, RefreshCw, Save, Palette, Database } from 'lucide-react';
import { useState, useEffect } from 'react';

const data = [
  { name: 'Jan', value: 400, users: 240, revenue: 680 },
  { name: 'Feb', value: 300, users: 139, revenue: 800 },
  { name: 'Mar', value: 200, users: 980, revenue: 900 },
  { name: 'Apr', value: 278, users: 390, revenue: 1200 },
  { name: 'May', value: 189, users: 480, revenue: 1500 },
  { name: 'Jun', value: 239, users: 380, revenue: 1000 },
];

const pieData = [
  { name: 'Mobile', value: 45, color: '#00C49F' },
  { name: 'Desktop', value: 35, color: '#0088FE' },
  { name: 'Tablet', value: 20, color: '#FFBB28' },
];

const areaData = [
  { name: 'Mon', visitors: 4000 },
  { name: 'Tue', visitors: 3000 },
  { name: 'Wed', visitors: 5000 },
  { name: 'Thu', visitors: 4500 },
  { name: 'Fri', visitors: 6000 },
  { name: 'Sat', visitors: 3500 },
  { name: 'Sun', visitors: 4800 },
];

function SettingsPage({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean; setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState('5');
  const [notifications, setNotifications] = useState(true);
  const [dataSource, setDataSource] = useState('live');

  const settingsCategories = [
    {
      title: 'Appearance',
      icon: Palette,
      items: [
        {
          label: 'Dark Mode',
          description: 'Switch between dark and light themes',
          component: (
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-16 h-8 rounded-full transition-colors duration-200 ${
                isDarkMode ? 'bg-blue-500' : 'bg-gray-400'
              }`}
            >
              <div className={`w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-200 ${
                isDarkMode ? 'translate-x-8' : 'translate-x-1'
              }`}></div>
            </button>
          )
        }
      ]
    },
    {
      title: 'Data & Refresh',
      icon: Database,
      items: [
        {
          label: 'Auto Refresh',
          description: 'Automatically refresh data at regular intervals',
          component: (
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="w-5 h-5 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
          )
        },
        {
          label: 'Refresh Interval',
          description: 'How often to refresh data automatically',
          component: (
            <select
              value={refreshInterval}
              onChange={(e) => setRefreshInterval(e.target.value)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">1 minute</option>
              <option value="5">5 minutes</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
            </select>
          )
        },
        {
          label: 'Data Source',
          description: 'Choose between live data or cached data',
          component: (
            <select
              value={dataSource}
              onChange={(e) => setDataSource(e.target.value)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="live">Live Data</option>
              <option value="cached">Cached Data</option>
            </select>
          )
        }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        {
          label: 'Push Notifications',
          description: 'Receive notifications for important updates',
          component: (
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="w-5 h-5 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
          )
        }
      ]
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Settings</h1>
        <p className={isDarkMode?'text-gray-400':'text-gray-600'}>Customize your dashboard experience</p>
      </div>

      <div className="space-y-8">
        {settingsCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <div
              key={categoryIndex}
              className={`${
                isDarkMode 
                  ? 'bg-gray-800/40 backdrop-blur-xl border border-gray-700/50' 
                  : 'bg-white/60 backdrop-blur-xl border border-gray-200/50'
              } rounded-2xl p-6`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{category.title}</h2>
              </div>

              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className={`text-lg font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                    </div>
                    <div className="ml-4">
                      {item.component}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
          <Save className="w-5 h-5" />
          <span>Save Settings</span>
        </button>
      </div>
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const stats = [
    { 
      title: 'Total Revenue', 
      value: '$45,671', 
      change: '+12.5%', 
      changeType: 'positive',
      icon: DollarSign, 
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-400',
      trend: [4, 5, 6, 7, 8, 6, 9]
    },
    { 
      title: 'Active Users', 
      value: '1,234', 
      change: '+8.2%', 
      changeType: 'positive',
      icon: Users, 
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400',
      trend: [2, 3, 4, 3, 5, 4, 6]
    },
    { 
      title: 'Page Views', 
      value: '45,679', 
      change: '+15.3%', 
      changeType: 'positive',
      icon: Eye, 
      color: 'from-purple-400 to-violet-500',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
      trend: [5, 7, 6, 8, 9, 7, 10]
    },
    { 
      title: 'Bounce Rate', 
      value: '3.24%', 
      change: '-2.1%', 
      changeType: 'negative',
      icon: Activity, 
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-500/10',
      textColor: 'text-orange-400',
      trend: [8, 7, 6, 5, 4, 3, 2]
    },
  ];

  const navItems = [
    { label: 'Dashboard', icon: TrendingUp, id: 'dashboard' },
    { label: 'Reports', icon: Download, id: 'reports' },
    { label: 'Settings', icon: Settings, id: 'settings' },
  ];

  const quickActions = [
    { label: 'Export Data', icon: Download, description: 'Download reports' },
    { label: 'Refresh Data', icon: RefreshCw, description: 'Update metrics' },
    { label: 'Filter', icon: Filter, description: 'Advanced filters' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'}`}>
      {/* Modern Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${isDarkMode ? 'bg-gray-800/95 backdrop-blur-xl border-r border-gray-700/50' : 'bg-white/95 backdrop-blur-xl border-r border-gray-200/50'}`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            <div>
                <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Analytics</h1>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dashboard v2.0</p>
              </div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : `${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'}`
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className={`p-6 border-t ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
              <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Modern Header */}
        <header className={`sticky top-0 z-30 ${isDarkMode ? 'bg-gray-800/80 backdrop-blur-xl border-b border-gray-700/50' : 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50'} shadow-lg`}>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors lg:hidden"
                >
                  <Menu className="w-5 h-5 text-gray-300" />
                </button>
                <div>
                  <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Dashboard</h1>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome back! Here's what's happening today.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Quick Actions */}
                <div className="flex space-x-2">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon;
                    return (
                      <button 
                        key={index} 
                        className="group relative p-2 rounded-xl bg-gray-700/50 hover:bg-gray-600/50 transition-all duration-200"
                        title={action.description}
                      >
                        <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                      </button>
                    );
                  })}
                </div>

                {/* Notifications */}
                <button className="relative p-2 rounded-xl bg-gray-700/50 hover:bg-gray-600/50 transition-colors">
                  <Bell className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>{' '}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        {currentPage === 'dashboard' && (
          <main className="px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isDarkMode 
                      ? 'bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50' 
                      : 'bg-white/60 backdrop-blur-xl border border-gray-200/50 hover:border-gray-300/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className={`w-6 h-6 ${stat.textColor}`} />
                  </div>
                      <div className={`p-2 rounded-full ${stat.changeType === 'positive' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                </div>
                    
                <div>
                      <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.title}</p>
                      <p className={`text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300 ${
                        isDarkMode 
                          ? 'text-white group-hover:from-white group-hover:to-gray-300' 
                          : 'text-gray-900 group-hover:from-gray-900 group-hover:to-gray-700'
                      }`}>
                        {stat.value}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                            stat.changeType === 'positive' 
                              ? 'text-green-400 bg-green-500/20' 
                              : 'text-red-400 bg-red-500/20'
                          }`}>
                      {stat.change}
                    </span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                          {/* Mini trend chart */}
                          <svg className="w-8 h-4" viewBox="0 0 32 16">
                            <polyline
                              fill="none"
                              stroke={stat.changeType === 'positive' ? '#10b981' : '#ef4444'}
                              strokeWidth="2"
                              points={stat.trend.map((val, i) => `${i * 4},${16 - val * 1.5}`).join(' ')}
                              className="transition-all duration-300"
                              strokeDasharray={index * 20}
                            />
                          </svg>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
            <div className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
              isDarkMode 
                ? 'bg-gray-800/40 backdrop-blur-xl border border-gray-700/50' 
                : 'bg-white/60 backdrop-blur-xl border border-gray-200/50'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Monthly Revenue</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Last 6 months</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Revenue</span>
                  </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                      axisLine={{ stroke: '#374151' }}
                    />
                    <YAxis 
                      tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                      axisLine={{ stroke: '#374151' }}
                      tickFormatter={(value) => `$${value}`}
                    />
                <Tooltip 
                  contentStyle={{ 
                        backgroundColor: 'rgba(31, 41, 55, 0.95)', 
                        border: 'none',
                        borderRadius: '12px',
                        color: '#F9FAFB',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                      }}
                      formatter={(value) => [`$${value}`, 'Revenue']}
                    />
                    <Bar 
                      dataKey="revenue" 
                      fill="url(#barGradient)" 
                      radius={[8, 8, 0, 0]} 
                      className="hover:opacity-80 transition-opacity"
                    />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1E40AF" />
                      </linearGradient>
                    </defs>
              </BarChart>
            </ResponsiveContainer>
              </div>
          </div>

          {/* User Growth Chart */}
            <div className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
              isDarkMode 
                ? 'bg-gray-800/40 backdrop-blur-xl border border-gray-700/50' 
                : 'bg-white/60 backdrop-blur-xl border border-gray-200/50'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>User Growth</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Weekly visitors</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Visitors</span>
                  </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={areaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#10B981" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                      axisLine={{ stroke: '#374151' }}
                    />
                    <YAxis 
                      tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                      axisLine={{ stroke: '#374151' }}
                      tickFormatter={(value) => `${value/1000}k`}
                    />
                <Tooltip 
                  contentStyle={{ 
                        backgroundColor: 'rgba(31, 41, 55, 0.95)', 
                        border: 'none',
                        borderRadius: '12px',
                        color: '#F9FAFB',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                      }}
                      formatter={(value) => [value.toLocaleString(), 'Visitors']}
                />
                <Area 
                  type="monotone" 
                  dataKey="visitors"
                      stroke="url(#strokeGradient)"
                      fill="url(#areaGradient)" 
                  strokeWidth={3}
                      className="hover:opacity-80 transition-opacity"
                    />
              </AreaChart>
            </ResponsiveContainer>
          </div>
            </div>
          </div>

          {/* Bottom Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Traffic Sources */}
            <div className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
              isDarkMode 
                ? 'bg-gray-800/40 backdrop-blur-xl border border-gray-700/50' 
                : 'bg-white/60 backdrop-blur-xl border border-gray-200/50'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Traffic Sources</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Device breakdown</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sources</span>
                  </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                      label={(props: any) => `${props.name} (${(props.percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  innerRadius={40}
                  dataKey="value"
                      className="hover:scale-105 transition-transform"
                >
                  {pieData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                        backgroundColor: 'rgba(31, 41, 55, 0.95)', 
                        border: 'none',
                        borderRadius: '12px',
                        color: '#F9FAFB',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-3">
                  {pieData.map((item) => (
                    <div key={item.name} className={`group/item flex items-center justify-between text-sm hover:bg-gray-700/30 rounded-lg p-2 transition-colors ${
                      isDarkMode ? 'hover:bg-gray-700/30' : 'hover:bg-gray-200/50'
                    }`}>
                  <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-3 transition-transform group-hover/item:scale-125" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.name}</span>
                      </div>
                      <span className={`font-semibold px-2 py-1 rounded-lg ${
                        isDarkMode 
                          ? 'text-white bg-gray-700/50' 
                          : 'text-gray-900 bg-gray-300/50'
                      }`}>
                        {item.value}%
                      </span>
                  </div>
                  ))}
                </div>
            </div>
          </div>

          {/* Performance Overview */}
            <div className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
              isDarkMode 
                ? 'bg-gray-800/40 backdrop-blur-xl border border-gray-700/50' 
                : 'bg-white/60 backdrop-blur-xl border border-gray-200/50'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Performance Overview</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Real-time metrics</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse"></div>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Live</span>
                  </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                      axisLine={{ stroke: '#374151' }}
                    />
                    <YAxis 
                      tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                      axisLine={{ stroke: '#374151' }}
                    />
                <Tooltip 
                  contentStyle={{ 
                        backgroundColor: 'rgba(31, 41, 55, 0.95)', 
                        border: 'none',
                        borderRadius: '12px',
                        color: '#F9FAFB',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                      }} 
                    />
                    <defs>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="50%" stopColor="#A855F7" />
                        <stop offset="100%" stopColor="#9333EA" />
                      </linearGradient>
                    </defs>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                      stroke="url(#lineGradient)" 
                  strokeWidth={3}
                      dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 5 }}
                      activeDot={{ r: 8, fill: '#A855F7', stroke: '#fff', strokeWidth: 2 }}
                      className="hover:opacity-80 transition-opacity"
                />
              </LineChart>
            </ResponsiveContainer>
              </div>
          </div>
        </div>

        {/* Recent Activity */}
          <div className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
            isDarkMode 
              ? 'bg-gray-800/40 backdrop-blur-xl border border-gray-700/50' 
              : 'bg-white/60 backdrop-blur-xl border border-gray-200/50'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Live system events</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span>
                    <button 
                      onClick={() => setIsLoading(!isLoading)}
                      className={`text-sm transition-colors ${
                        isDarkMode 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Refresh
                    </button>
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="group/item flex items-center space-x-4 p-4 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-all duration-200">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-30"></div>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>New user registration completed</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Account created and verified successfully</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>2 minutes ago</p>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>
                
                <div className="group/item flex items-center space-x-4 p-4 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-all duration-200">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Monthly report generated</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Analytics report ready for download</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>1 hour ago</p>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Download className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                </div>
                
                <div className="group/item flex items-center space-x-4 p-4 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-all duration-200">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>System maintenance scheduled</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Scheduled for tomorrow at 2:00 AM</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>3 hours ago</p>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <Settings className="w-4 h-4 text-orange-400" />
                    </div>
              </div>
            </div>

                {/* Live activity indicator */}
                <div className={`flex items-center justify-center pt-4 border-t ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
                  <div className={`flex items-center space-x-2 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live updates enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        )}
        
        {currentPage === 'settings' && (
          <SettingsPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        )}
        </div>
    </div>
  );
}

export default App;
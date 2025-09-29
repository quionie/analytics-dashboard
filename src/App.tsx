import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, DollarSign, Eye, Activity, Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';

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

function App() {
  const stats = [
    { 
      title: 'Total Revenue', 
      value: '$45,671', 
      change: '+12.5%', 
      changeType: 'positive',
      icon: DollarSign, 
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-400'
    },
    { 
      title: 'Active Users', 
      value: '1,234', 
      change: '+8.2%', 
      changeType: 'positive',
      icon: Users, 
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400'
    },
    { 
      title: 'Page Views', 
      value: '45,679', 
      change: '+15.3%', 
      changeType: 'positive',
      icon: Eye, 
      color: 'from-purple-400 to-violet-500',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400'
    },
    { 
      title: 'Bounce Rate', 
      value: '3.24%', 
      change: '-2.1%', 
      changeType: 'negative',
      icon: Activity, 
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-500/10',
      textColor: 'text-orange-400'
    },
  ];

  const quickActions = [
    { label: 'Export Data', icon: Zap, description: 'Download reports' },
    { label: 'View Analytics', icon: TrendingUp, description: 'Detailed insights' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
              <p className="mt-2 text-gray-400">Monitor your business metrics and performance</p>
            </div>
            <div className="flex space-x-3">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <button key={index} className="group flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200">
                    <IconComponent className="w-4 h-4 text-gray-300 group-hover:text-white" />
                    <span className="text-gray-300 group-hover:text-white">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:shadow-xl hover:shadow-black/20">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor} group-hover:scale-105 transition-transform duration-200`}>
                    <IconComponent className={`w-6 h-6 ${stat.textColor}`} />
                  </div>
                  <div className="flex items-center space-x-1">
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-2">{stat.title}</p>
                  <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                  <div className="flex items-center">
                    <span className={`text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">vs last month</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Monthly Revenue</h3>
              <div className="text-sm text-gray-400">Last 6 months</div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" tick={{ fill: '#9CA3AF' }} />
                <YAxis tick={{ fill: '#9CA3AF' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* User Growth Chart */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">User Growth</h3>
              <div className="text-sm text-gray-400">Weekly visitors</div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" tick={{ fill: '#9CA3AF' }} />
                <YAxis tick={{ fill: '#9CA3AF' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="visitors"
                  stroke="#10B981" 
                  fill="url(#gradient)" 
                  strokeWidth={3}
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="100%" stopColor="#10B981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic Sources */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Traffic Sources</h3>
              <div className="text-sm text-gray-400">Device breakdown</div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-300">{item.name}</span>
                  </div>
                  <span className="text-white font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Overview */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Performance Overview</h3>
              <div className="text-sm text-gray-400">Real-time metrics</div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" tick={{ fill: '#9CA3AF' }} />
                <YAxis tick={{ fill: '#9CA3AF' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-white text-sm">New user registration completed</p>
                <p className="text-gray-400 text-xs">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-white text-sm">Monthly report generated</p>
                <p className="text-gray-400 text-xs">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div>
                <p className="text-white text-sm">System maintenance scheduled</p>
                <p className="text-gray-400 text-xs">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
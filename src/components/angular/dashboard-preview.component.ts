import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DashboardStat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

interface RecentActivity {
  id: number;
  type: 'enrollment' | 'grade' | 'attendance' | 'payment';
  message: string;
  time: string;
}

@Component({
  selector: 'app-dashboard-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="benefits" class="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4">
            📊 Live Dashboard Preview
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold mb-4">See SMS in Action</h2>
          <p class="text-xl text-slate-600 dark:text-slate-300">
            Experience the power of real-time data management
          </p>
        </div>

        <!-- Dashboard Mock -->
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <!-- Dashboard Header -->
          <div class="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">S</span>
              </div>
              <span class="text-white font-semibold">SMS Dashboard</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-white/80 text-sm">Welcome, Admin</span>
              <div class="w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
          </div>

          <!-- Dashboard Content -->
          <div class="p-6">
            <!-- Stats Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              @for (stat of stats(); track stat.label) {
                <div 
                  class="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  (mouseenter)="highlightStat(stat.label)"
                  (mouseleave)="highlightStat('')"
                >
                  <div class="flex items-start justify-between mb-2">
                    <span class="text-2xl">{{ stat.icon }}</span>
                    <span 
                      class="text-xs font-medium px-2 py-1 rounded-full"
                      [class]="stat.trend === 'up' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'"
                    >
                      {{ stat.change }}
                    </span>
                  </div>
                  <p class="text-2xl font-bold text-slate-900 dark:text-white">{{ stat.value }}</p>
                  <p class="text-sm text-slate-600 dark:text-slate-400">{{ stat.label }}</p>
                </div>
              }
            </div>

            <!-- Two Column Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Chart Placeholder -->
              <div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border border-slate-200 dark:border-slate-600">
                <h3 class="font-semibold text-slate-900 dark:text-white mb-4">Enrollment Trends</h3>
                <div class="h-48 flex items-end justify-between gap-2">
                  @for (bar of chartBars(); track $index) {
                    <div 
                      class="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-500 hover:to-blue-300"
                      [style.height.%]="bar"
                    ></div>
                  }
                </div>
                <div class="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                </div>
              </div>

              <!-- Recent Activity -->
              <div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border border-slate-200 dark:border-slate-600">
                <h3 class="font-semibold text-slate-900 dark:text-white mb-4">Recent Activity</h3>
                <div class="space-y-3">
                  @for (activity of recentActivities(); track activity.id) {
                    <div class="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow">
                      <div 
                        class="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                        [class]="getActivityColor(activity.type)"
                      >
                        {{ getActivityIcon(activity.type) }}
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm text-slate-900 dark:text-white truncate">{{ activity.message }}</p>
                        <p class="text-xs text-slate-500 dark:text-slate-400">{{ activity.time }}</p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-12">
          <p class="text-slate-600 dark:text-slate-400 mb-4">
            This is just a preview. The full dashboard offers much more!
          </p>
          <button class="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-lg font-semibold transition transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  `,
})
export class DashboardPreviewComponent {
  highlightedStat = signal<string>('');

  stats = signal<DashboardStat[]>([
    { label: 'Total Students', value: '2,847', change: '+12%', trend: 'up', icon: '👨‍🎓' },
    { label: 'Attendance Rate', value: '94.2%', change: '+3%', trend: 'up', icon: '✅' },
    { label: 'Pending Fees', value: '$12.4K', change: '-8%', trend: 'down', icon: '💰' },
    { label: 'Avg. GPA', value: '3.42', change: '+0.2', trend: 'up', icon: '📈' },
  ]);

  chartBars = signal<number[]>([45, 62, 78, 54, 89, 72, 95, 83]);

  recentActivities = signal<RecentActivity[]>([
    { id: 1, type: 'enrollment', message: 'New student enrolled: Sarah Johnson', time: '2 mins ago' },
    { id: 2, type: 'grade', message: 'Grades updated for Math 101', time: '15 mins ago' },
    { id: 3, type: 'attendance', message: 'Attendance marked for Class 10-A', time: '1 hour ago' },
    { id: 4, type: 'payment', message: 'Fee payment received: $500', time: '2 hours ago' },
  ]);

  highlightStat(label: string) {
    this.highlightedStat.set(label);
  }

  getActivityIcon(type: string): string {
    const icons: Record<string, string> = {
      enrollment: '📝',
      grade: '📊',
      attendance: '✓',
      payment: '💳',
    };
    return icons[type] || '📌';
  }

  getActivityColor(type: string): string {
    const colors: Record<string, string> = {
      enrollment: 'bg-blue-100 dark:bg-blue-900/30',
      grade: 'bg-purple-100 dark:bg-purple-900/30',
      attendance: 'bg-green-100 dark:bg-green-900/30',
      payment: 'bg-orange-100 dark:bg-orange-900/30',
    };
    return colors[type] || 'bg-slate-100 dark:bg-slate-700';
  }
}

<script>
  import { onMount } from 'svelte';
  
  let activeCard = null;
  let mounted = false;

  const features = [
    {
      id: 1,
      title: 'Student Management',
      description: 'Centralized student profiles, enrollment tracking, and academic records management with powerful search capabilities.',
      icon: 'users',
      color: 'blue',
      details: ['Profile Management', 'Enrollment Tracking', 'Document Storage', 'Parent Portal']
    },
    {
      id: 2,
      title: 'Attendance Tracking',
      description: 'Real-time attendance monitoring with automated notifications and comprehensive reporting dashboards.',
      icon: 'check',
      color: 'green',
      details: ['QR Code Check-in', 'Biometric Support', 'Auto Notifications', 'Leave Management']
    },
    {
      id: 3,
      title: 'Grade Management',
      description: 'Streamlined grade entry, GPA calculation, and performance analytics for instructors and administrators.',
      icon: 'chart',
      color: 'purple',
      details: ['Grade Books', 'Report Cards', 'Transcripts', 'Performance Analytics']
    },
    {
      id: 4,
      title: 'Fee Management',
      description: 'Automated billing, online payment processing, and financial reporting for efficient administration.',
      icon: 'dollar',
      color: 'orange',
      details: ['Online Payments', 'Invoice Generation', 'Payment Plans', 'Financial Reports']
    },
    {
      id: 5,
      title: 'Analytics & Reports',
      description: 'Comprehensive dashboards and customizable reports for data-driven institutional decisions.',
      icon: 'analytics',
      color: 'red',
      details: ['Custom Dashboards', 'Export Options', 'Trend Analysis', 'Predictive Insights']
    },
    {
      id: 6,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with FERPA compliance, encryption, and role-based access control.',
      icon: 'shield',
      color: 'indigo',
      details: ['FERPA Compliant', 'Data Encryption', 'Role-Based Access', 'Audit Logs']
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 bg-blue-100 dark:bg-blue-900/30 text-blue-600',
    green: 'from-green-500 to-green-600 bg-green-100 dark:bg-green-900/30 text-green-600',
    purple: 'from-purple-500 to-purple-600 bg-purple-100 dark:bg-purple-900/30 text-purple-600',
    orange: 'from-orange-500 to-orange-600 bg-orange-100 dark:bg-orange-900/30 text-orange-600',
    red: 'from-red-500 to-red-600 bg-red-100 dark:bg-red-900/30 text-red-600',
    indigo: 'from-indigo-500 to-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600'
  };

  function toggleCard(id) {
    activeCard = activeCard === id ? null : id;
  }

  onMount(() => {
    mounted = true;
  });
</script>

<section id="features" class="py-20 px-4 bg-white dark:bg-slate-950">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
        ✨ Powerful Features
      </span>
      <h2 class="text-4xl lg:text-5xl font-bold mb-4">Everything You Need</h2>
      <p class="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        Comprehensive tools to manage your educational institution effectively
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each features as feature, index}
        <button
          class="group relative p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 
                 hover:shadow-2xl hover:shadow-{feature.color}-500/10 transition-all duration-500 cursor-pointer text-left
                 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
          style="transition-delay: {index * 100}ms"
          on:click={() => toggleCard(feature.id)}
        >
          <!-- Icon -->
          <div class="w-14 h-14 {colorClasses[feature.color].split(' ').slice(2).join(' ')} rounded-xl flex items-center justify-center mb-5 
                      group-hover:scale-110 transition-transform duration-300">
            {#if feature.icon === 'users'}
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m12.574 6.196"/>
              </svg>
            {:else if feature.icon === 'check'}
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            {:else if feature.icon === 'chart'}
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            {:else if feature.icon === 'dollar'}
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            {:else if feature.icon === 'analytics'}
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
              </svg>
            {:else if feature.icon === 'shield'}
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            {/if}
          </div>

          <h3 class="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {feature.title}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 mb-4">{feature.description}</p>

          <!-- Expandable Details -->
          {#if activeCard === feature.id}
            <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 animate-fadeIn">
              <ul class="space-y-2">
                {#each feature.details as detail}
                  <li class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    {detail}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}

          <!-- Click indicator -->
          <div class="absolute bottom-4 right-4 text-slate-400 text-xs">
            {activeCard === feature.id ? 'Click to collapse' : 'Click to expand'}
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
</style>

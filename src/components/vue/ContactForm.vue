<template>
  <section id="contact" class="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-white">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p class="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of schools and colleges already using SMS for streamlined management. Get started with a free demo today.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-blue-200 text-sm">Email us</p>
                <p class="font-semibold">contact@sms-edu.com</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p class="text-blue-200 text-sm">Call us</p>
                <p class="font-semibold">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Form -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Schedule a Demo</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="John"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="john@school.edu"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Institution Type</label>
              <select 
                v-model="form.institutionType"
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                <option value="">Select type...</option>
                <option value="k12">K-12 School</option>
                <option value="college">College/University</option>
                <option value="training">Training Institute</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea 
                v-model="form.message"
                rows="3"
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                placeholder="Tell us about your needs..."
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-lg font-semibold transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span v-if="!isSubmitting">Schedule Demo</span>
              <span v-else class="flex items-center gap-2">
                <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Submitting...
              </span>
            </button>

            <p v-if="submitSuccess" class="text-green-600 dark:text-green-400 text-center font-medium">
              ✓ Thank you! We'll be in touch soon.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  institutionType: '',
  message: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  isSubmitting.value = false;
  submitSuccess.value = true;
  
  // Reset form
  Object.assign(form, {
    firstName: '',
    lastName: '',
    email: '',
    institutionType: '',
    message: ''
  });
  
  // Hide success message after 3 seconds
  setTimeout(() => {
    submitSuccess.value = false;
  }, 3000);
};
</script>

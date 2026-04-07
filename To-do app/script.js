class NexusApp {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('nexus_v3')) || [];
        this.init();
    }

    init() {
        this.renderClock();
        setInterval(() => this.renderClock(), 1000);

        document.getElementById('nexus-form').onsubmit = (e) => {
            e.preventDefault();
            this.addTask();
        };

        this.renderTasks();
    }

    renderClock() {
        const now = new Date();
        document.getElementById('live-clock').textContent = now.toLocaleTimeString([], {hour12: false});
        document.getElementById('live-date').textContent = now.toLocaleDateString(undefined, {
            weekday: 'long', month: 'long', day: 'numeric'
        });
    }

    addTask() {
        const newTask = {
            id: crypto.randomUUID(),
            emoji: document.getElementById('emoji-picker').value,
            title: document.getElementById('task-name').value,
            date: document.getElementById('task-date').value,
            time: document.getElementById('task-time').value,
            reminderActive: true, // Default to on
            created: Date.now()
        };

        this.tasks.unshift(newTask);
        this.save();
        document.getElementById('nexus-form').reset();
    }

    toggleReminder(id) {
        this.tasks = this.tasks.map(t => 
            t.id === id ? { ...t, reminderActive: !t.reminderActive } : t
        );
        this.save();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.save();
    }

    save() {
        localStorage.setItem('nexus_v3', JSON.stringify(this.tasks));
        this.renderTasks();
    }

    renderTasks() {
        const container = document.getElementById('task-render-engine');
        document.getElementById('stats-counter').textContent = `${this.tasks.length} Nodes`;

        container.innerHTML = this.tasks.map(task => `
            <li class="task-node">
                <div class="task-main">
                    <h4>${task.emoji} ${task.title}</h4>
                    <div class="task-details">
                        <span>📅 ${task.date}</span>
                        <span>⏰ ${task.time}</span>
                    </div>
                </div>
                <div class="actions">
                    <span class="bell-icon ${task.reminderActive ? 'active' : ''}" 
                          onclick="app.toggleReminder('${task.id}')">
                        ${task.reminderActive ? '🔔' : '🔕'}
                    </span>
                    <button class="delete-btn" onclick="app.deleteTask('${task.id}')">TERMINATE</button>
                </div>
            </li>
        `).join('');
    }
}

// Start Application
const app = new NexusApp();

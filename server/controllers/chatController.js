const processMessage = async (req, res) => {
    const { message } = req.body;
    const lowerMsg = message.toLowerCase();

    // Define response logic
    let response = {
        text: "I'm not sure about that. Please contact the administration office.",
        action: null,
        chips: []
    };

    // Keyword Logic
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        response.text = "Hello! I'm your Smart Campus Assistant. How can I help you today?";
        response.chips = ["Admissions", "Fees", "Placements", "Campus Map"];
    } else if (lowerMsg.includes('admission') || lowerMsg.includes('apply')) {
        response.text = "Admissions are open for the 2026 academic year. You can apply online or visit our campus.";
        response.action = { type: 'navigate', payload: '/admissions' };
        response.chips = ["Fee Structure", "Eligibility", "Contact Admin"];
    } else if (lowerMsg.includes('fee') || lowerMsg.includes('cost')) {
        response.text = "The fee structure varies by department. For standard engineering courses, it's approx ₹1.5L/year. Would you like to see the detailed breakdown?";
        response.action = { type: 'navigate', payload: '/admissions' };
        response.chips = ["Pay Fees", "Scholarships"];
    } else if (lowerMsg.includes('placement') || lowerMsg.includes('job')) {
        response.text = "RYMEC has a 95% placement record! Top recruiters include TCS, Infosys, and Wipro.";
        response.action = { type: 'navigate', payload: '/placements' };
        response.chips = ["Highest Package", "Recruiters"];
    } else if (lowerMsg.includes('syllabus') || lowerMsg.includes('course')) {
        response.text = "You can view the detailed syllabus and course structure on the Programs page.";
        response.action = { type: 'navigate', payload: '/programs' };
        response.chips = ["CSE", "ECE", "Mechanical"];
    } else if (lowerMsg.includes('result') || lowerMsg.includes('exam')) {
        response.text = "Exam results and schedules are available on the Student Portal.";
        response.chips = ["Student Portal", "Exam Time Table"];
    } else if (lowerMsg.includes('map') || lowerMsg.includes('location')) {
        response.text = "We are located at Cantonment, Ballari. Use the map in the Contact section for directions.";
        response.action = { type: 'navigate', payload: '/contact' };
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('phone') || lowerMsg.includes('email')) {
        response.text = "You can reach us at 08392-244809 or principal@rymec.in.";
        response.action = { type: 'navigate', payload: '/contact' };
    }

    // Artificial delay to simulate "thinking"
    setTimeout(() => {
        res.json(response);
    }, 1000);
};

export { processMessage };

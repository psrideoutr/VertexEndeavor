class ProjectManagementSolution {
    constructor() {
        this.performance = "optimal";
    }

    transformWork() {
        console.log("Transform the way you work!");
    }

    isEngineeredForPerformance() {
        if (this.performance === "optimal") {
            console.log("Our project management solution is engineered for optimal performance.");
        } else {
            console.log("Our project management solution may not be optimized for performance.");
        }
    }
}

// 示例用法
const projectSolution = new ProjectManagementSolution();

// 转变工作方式
projectSolution.transformWork();

// 检查是否为性能优化工程
projectSolution.isEngineeredForPerformance();

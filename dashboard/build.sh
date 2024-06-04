docker build \
        -t kubernetesui/dashboard-riscv64:v2.6.1 \
        --build-arg BUILDPLATFORM=linux/riscv64 \
        dist/riscv64

package google.part1.linerlist.queue;

public interface IDeque<E> extends IQueue<E> {
    void enQueueFront(E element);

    E deQueueRear();
}

package google.part1.linerlist.queue;

public interface IQueue<E> {
    int size();

    boolean isEmpty();

    void enqueue(E element);

    E dequeue();

    E front();

    void clear();
}

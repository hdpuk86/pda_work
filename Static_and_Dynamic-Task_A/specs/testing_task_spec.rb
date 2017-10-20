require 'minitest/autorun'
require 'minitest/rg'

require_relative '../testing_task_2'

class Test_testing_task < MiniTest::Test

  def test_func1()
    actual1 = func1(1)
    actual2 = func1(2)
    assert_equal(true, actual1)
    assert_equal(false, actual2)
  end

  def test_max()
    actual1 = max(10,1)
    actual2 = max(1,20)
    assert_equal(10, actual1)
    assert_equal(20, actual2)
  end

  def test_looper()
    actual = looper()
    assert_equal(10, actual)
  end

end

package com.edu.sign.dao;

import com.edu.sign.po.SignInfo;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by qiuch on 2017/8/12.
 */
@Repository
public interface SignInfoDao extends PagingAndSortingRepository<SignInfo, Long> {
}
